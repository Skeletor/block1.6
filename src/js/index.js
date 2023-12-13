
import '../scss/style.scss'

var menu = document.querySelector(".menu");
var callWindow = document.querySelector("#modal-call");
var chatWindow = document.querySelector("#modal-chat");
var body = document.querySelector("body");
var infoText = document.querySelector(".article-services .info__text");

const infoExpandButton = document.querySelector(".article-services .info__expand-button");
const brandExpandButton = document.querySelector(".article-brands .expand-button");
const techExpandButton = document.querySelector(".article-tech .expand-button");
const openMenuButtonList = document.querySelectorAll(".open-menu-button");
const closeMenuButtonList = document.querySelectorAll(".close-menu-button");
const openChatButton = document.querySelectorAll(".open-chat-button");
const openCallButton = document.querySelectorAll(".open-call-button");
const closeCallButton = document.querySelector("#modal-call .close-call-button");
const closeChatButton = document.querySelector("#modal-chat .close-chat-button");

const opacityFilter = document.querySelector(".opacity-filter");

var menuOpened = false;
var callWindowOpened = false;
var chatWindowOpened = false;

var brandSwiperContainer = document.querySelector(".article-brands .swiper-container");
var techSwiperContainer = document.querySelector(".article-tech .swiper-container");

const showMoreText = "Показать еще";
const showLessText = "Скрыть";


var removeOpacity = function ()
{
    opacityFilter.classList.add("hidden");
}

var addOpacity = function ()
{
    opacityFilter.classList.remove("hidden");
    opacityFilter.style.height = getDocumentHeight() + 'px';
}

var menuHandler = function ()
{
    if (window.innerWidth < 768)
    {
        hideMenu();
        return;
    }

    if (window.innerWidth >= 1366)
    {
        showMenu();
        return;
    }

    hideMenu();
}

var swiperLoader = function ()
{
    if (window.innerWidth >= 768)
    {
        return;
    }

    new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 16,
    });
}

var hideMenu = function ()
{
    menu.classList.add("hidden");
    menu.style.height = "fit-content";
    menuOpened = false;

    removeOpacity();
}

var showMenu = function ()
{
    menu.classList.remove("hidden");

    menu.style.height = getDocumentHeight() + 'px';
    
    menuOpened = true;

    if (window.innerWidth < 1366)
    {
        addOpacity();
    }
}

var openMenuButtonClicked = function ()
{
    showMenu();
}

var closeMenuButtonClicked = function ()
{
    hideMenu();
}

var openCallWindow = function ()
{
    if (window.innerWidth < 1366)
    {
        hideMenu();
    }

    closeChatWindow();
    addOpacity();

    callWindow.classList.remove("hidden");
    callWindowOpened = true;
}

var closeCallWindow = function ()
{
    callWindow.classList.add("hidden");
    callWindowOpened = false;

    removeOpacity();
}

var openChatWindow = function ()
{
    if (window.innerWidth < 1366)
    {
        hideMenu();
    }

    closeCallWindow();
    addOpacity();

    chatWindow.classList.remove("hidden");
    chatWindowOpened = true;
}

var closeChatWindow = function ()
{
    chatWindow.classList.add("hidden");
    chatWindowOpened = false;

    removeOpacity();
}

var showHideInfoText = function ()
{
   showHideTemplate(infoText, infoExpandButton);
}

var showHideBrands = function ()
{
   showHideTemplate(brandSwiperContainer, brandExpandButton);
}

var showHideTech = function ()
{
    showHideTemplate(techSwiperContainer, techExpandButton);
}

var showHideTemplate = function (container, button)
{
    container.classList.toggle("visible");
    var img = button.querySelector("img");
    var p = button.querySelector("p");

    img.classList.contains("shown") ? p.textContent = showMoreText : p.textContent = showLessText;
    img.classList.toggle("shown");
}

var getDocumentHeight = function ()
{
    var html = document.documentElement;
    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
}

window.addEventListener("load", swiperLoader);

menuHandler();
window.addEventListener("resize", menuHandler);

infoExpandButton.addEventListener("click", showHideInfoText);
brandExpandButton.addEventListener("click", showHideBrands);
techExpandButton.addEventListener("click", showHideTech);

for (var i = 0; i < openMenuButtonList.length; ++i)
{
    openMenuButtonList[i].addEventListener("click", openMenuButtonClicked);
}

for (var i = 0; i < closeMenuButtonList.length; ++i)
{
    closeMenuButtonList[i].addEventListener("click", closeMenuButtonClicked);
}

for (var i = 0; i < openCallButton.length; ++i)
{
    openCallButton[i].addEventListener("click", openCallWindow);
}
closeCallButton.addEventListener("click", closeCallWindow);

for (var i = 0; i < openChatButton.length; ++i)
{
    openChatButton[i].addEventListener("click", openChatWindow);
}
closeChatButton.addEventListener("click", closeChatWindow);