let monsters = await initMonstersEspers("monsters");
let espers = await initMonstersEspers("espers");
initSessionVar(Session.GALLERY_PAGE, 1);

$(document).ready(function() {
    applyTemplateSetClicks();
    setSelectedPageButton("btns-mons-top", sessionStorage.getItem(Session.GALLERY_PAGE));
    setSelectedPageButton("btns-mons-bottom", sessionStorage.getItem(Session.GALLERY_PAGE));
});

function getData() {
    var page_num = sessionStorage.getItem(Session.GALLERY_PAGE);
    var mons_min = (page_num - 1) * 100;
    var mons_max = page_num == 4 ? monsters.length: page_num * 100;
    var sub_array = page_num == 5 ? espers: monsters.slice(mons_min, mons_max+1);

    var data = { 
        sub_array : sub_array
    }
    return data;
}

function applyTemplateSetClicks() {
    var data = getData();
    var page_name = "RotDS - ";
    var page_index = sessionStorage.getItem(Session.GALLERY_PAGE);
    page_name += page_index < 5 ? "Monsters - Page " + page_index: "Espers";
    $(document).prop("title", page_name);
    renderMainTemplate("monsters", "header", "render", data);
    removeAddClassChildren("btns-mons-top", "button", Style.BUTTON_PRESSED, Style.BUTTON_DEFAULT);
    setClicksGroup("btns-mons-top", sessionStorage.getItem(Session.GALLERY_PAGE));
    setClicksGroup("btns-mons-bottom", sessionStorage.getItem(Session.GALLERY_PAGE));

    if (page_index < 5) {
        $("#btns-mons-bottom > button").show();
    } else {
        $("#btns-mons-bottom > button").hide();
    }

    $("#page-gallery > div").each(function () {
        if (typeof $(this).data("index") !== "undefined") {
            var mons_index = $(this).attr("data-index");
            $(this).click(function(){
                sessionStorage.setItem(Session.MONSTER_INDEX, mons_index);
            });
        }
    });
}

function setSelectedPageButton(selector, page_num) {
    selector = "#" + selector + " > " + "button";
    $(selector).each(function () {
        var page_num_child = $(this).attr("data-page");
        if (page_num == page_num_child) {
            removeAddClass(this, Style.BUTTON_DEFAULT, Style.BUTTON_PRESSED);
        }
    });
}

function setClicksGroup(selector, page_num) {
    selector = "#" + selector + " > " + "button";
    $(selector).each(function () {
        var page_num_child = $(this).attr("data-page");
        $(this).click(function(){
            sessionStorage.setItem(Session.GALLERY_PAGE, page_num_child);
            applyTemplateSetClicks();
        });
        if (page_num == page_num_child) {
            removeAddClass(this, Style.BUTTON_DEFAULT, Style.BUTTON_PRESSED);
        }
    });
}