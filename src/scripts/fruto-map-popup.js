if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function(searchElement, fromIndex) {

            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            // 1. Let O be ? ToObject(this value).
            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }

            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;

            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            function sameValueZero(x, y) {
                return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
            }

            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                if (sameValueZero(o[k], searchElement)) {
                    return true;
                }
                // c. Increase k by 1.
                k++;
            }

            // 8. Return false
            return false;
        }
    });
}

var levelItems = Array.prototype.slice.call(document.querySelectorAll('.level__item'))
    .filter(function (level) {
        if (Array.prototype.slice.call(level.classList).includes('level__item--future')) {
            return;
        } else {
            return level;
        }
    });

var gameBlock = document.querySelector('.game-block');
var closePopupBtn = document.querySelector('.btn-close');
var overlay = document.querySelector('.overlay');
var pageHeaderToggle = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');
var moveBlock = document.querySelector('.move-wrapper');
var contentHeight = document.querySelector('.bg-wrapper--map');
var fruitItem = document.querySelector('.fruit-item__left-4');



var soonButton = document.querySelector('.level__item--date');
var soonPopupOverlay = document.querySelector('.date-popup');
var soonPopup = soonPopupOverlay.querySelector('.popup-item');
var soonPopupClose = soonPopup.querySelector('.popup-close');

var levelQuestion = document.querySelector('.level__item--sign');

soonButton.addEventListener('click', function (evt) {
    soonPopupOverlay.style.display = 'flex';
    soonPopup.style.display = 'block';
});

soonPopupClose.addEventListener('click', function () {
    soonPopupOverlay.style.display = 'none';
    soonPopup.style.display = 'none';
});


var ideaButton = document.querySelector('.level__item--sign');
var contestButton = document.querySelector('.contest');
var beeTopButton = document.querySelector('.img-block--top');
var beeBottomButton = document.querySelector('.img-block--bottom');

var ideaPopupOverlay = document.querySelector('.popup-idea');
var ideaPopup = ideaPopupOverlay.querySelector('.popup-item');
var ideaPopupClose = ideaPopup.querySelector('.popup-close');


ideaButton.addEventListener('click', function (evt) {
    ideaPopupOverlay.style.display = 'flex';
    ideaPopup.style.display = 'block';
});

contestButton.addEventListener('click', function () {
    ideaPopupOverlay.style.display = 'flex';
    ideaPopup.style.display = 'block';
});


beeTopButton.addEventListener('click', function () {
    ideaPopupOverlay.style.display = 'flex';
    ideaPopup.style.display = 'block';
});

beeBottomButton.addEventListener('click', function () {
    ideaPopupOverlay.style.display = 'flex';
    ideaPopup.style.display = 'block';
});

ideaPopupClose.addEventListener('click', function () {
    ideaPopupOverlay.style.display = 'none';
    ideaPopup.style.display = 'none';
});








var currentLevelIdx = 1;
function openLevelPopup(level) {
    level.addEventListener('click', function (evt) {
        var levelType = level.className.split(' ')[currentLevelIdx];

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'fruto-map-level.json', false);
        xhr.send();
        if (xhr.status != 200) {
            // обработать ошибку
            alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        } else {
            var gameBlockInfo = JSON.parse(xhr.responseText);
            var levelInfo = gameBlockInfo[levelType];

            var levelName = gameBlock.querySelector('.game-title');
            var ingredients = gameBlock.querySelector('.list-items');
            var description = gameBlock.querySelector('.rules-info .description');
            var productSrc = gameBlock.querySelector('.product-info__image img');
            var productText = gameBlock.querySelector('.product-info__text .description');

            levelName.innerHTML = levelInfo.levelName;
            levelInfo.ingredients.forEach(function(ingredient, idx) {
                var ingredientNode = document.createElement('li');
                ingredientNode.innerHTML = levelInfo.ingredients[idx];
                ingredientNode.classList.add('list-items__item');
                ingredients.appendChild(ingredientNode);
            });
            description.innerHTML = levelInfo.description;
            productSrc.setAttribute('src', './' + levelInfo.productSrc);
            productText.innerHTML = levelInfo.productText;

            moveBlock.style.display = 'none';
            overlay.style.display = 'block';
            gameBlock.style.display = "block";
            contentHeight.style.overflow = "hidden";
            fruitItem.style.display = "none";
        }
    })
}


levelItems.forEach(function(levelItem) {
    openLevelPopup(levelItem)
});


function closeAndClearPopup() {
    moveBlock.style.display = 'block';
    overlay.style.display = 'none';
    var ingredients = gameBlock.querySelector('.list-items');
    ingredients.innerHTML = '';
    gameBlock.style.display = "none";
    contentHeight.style.overflow = 'visible';
}

levelItems.forEach(function (levelItem) {
    levelItem.addEventListener('click', function (openPopupEvt) {
        document.addEventListener('keydown', function(evtKey) {
            if(evtKey.keyCode === 27) {
                closeAndClearPopup();
            }
        })
    })
});

closePopupBtn.addEventListener('click', function (evt) {
    closeAndClearPopup()
});

pageHeaderToggle.addEventListener('click', function (evtClickToggle) {
    document.addEventListener('keydown', function (evtKey) {
        console.log(evtKey);
        if(evtKey.keyCode === 27) {
            mainNav.classList.add('main-nav--closed');
        }
    })
});


