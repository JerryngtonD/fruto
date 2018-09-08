var levelItems = document.querySelectorAll('.level__item');
var gameBlock = document.querySelector('.game-block');
var closePopupBtn = document.querySelector('.btn-close');
var overlay = document.querySelector('.overlay');
var pageHeaderToggle = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');
var moveBlock = document.querySelector('.move-wrapper');
var contentHeight = document.querySelector('.bg-wrapper--map')

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

            moveBlock.style.display = 'none';
            overlay.style.display = 'block';
            gameBlock.style.display = "block";
            contentHeight.style.overflow = 'hidden';
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


