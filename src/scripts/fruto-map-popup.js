var levelItems = document.querySelectorAll('.level__item');
var gameBlock = document.querySelector('.game-block');
var closePopupBtn = document.querySelector('.btn-close');
var overlay = document.querySelector('.overlay');
var pageHeaderToggle = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');

function getPosition(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
        if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
}


const currentLevelIdx = 1;
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


            overlay.style.display = 'block';
            gameBlock.style.display = "block";
        }
    })
}


levelItems.forEach(function(levelItem) {
    openLevelPopup(levelItem)
});


function closeAndClearPopup() {
    overlay.style.display = 'none';
    var ingredients = gameBlock.querySelector('.list-items');
    ingredients.innerHTML = '';
    gameBlock.style.display = "none";
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


