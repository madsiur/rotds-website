let guide_data = await fetchJson("guide");
initSessionVar(Session.GUIDE_PAGE, 1);

$(document).ready(function() {
    applyTemplateSetClicks()
});

function applyTemplateSetClicks() {
    var current_page = parseInt(sessionStorage.getItem(Session.GUIDE_PAGE));
    var prev_page = current_page == 1 ? -1: current_page - 1;
    var next_page = current_page == guide_data.length ? -1: current_page + 1;
    console.log("Current Page: " + current_page);

    var data = {
        "prev_page": prev_page,
        "next_page": next_page
    }

    var tmp_name = "guide/guide_" + current_page;
    renderMainTemplate("guidepage", "header", "render", data);
    renderTemplate(tmp_name, "render-page", {});

    var page_name = guide_data.filter(p => parseInt(p["id"]) == current_page)[0]["title"];
    var page_title = "Part " + current_page + ": " + page_name;
    var page_name = "RotDS - Guide Part " + current_page;
    $(document).prop("title", page_name);
    $("#page-title").html(page_title);
    setClicksIndex("btns-prev-next-top");
    setClicksIndex("btns-prev-next-bottom");
}

function setClicksIndex(id) {
    var selector = "#" + id + " > button";
    $(selector).each(function () {
        var current_button = $(this);
        current_button.click(function(){
            log("data-page = " + $(this).attr("data-page"));
            sessionStorage.setItem(Session.GUIDE_PAGE, $(this).attr("data-page"));
            applyTemplateSetClicks();
            if (id == "btns-prev-next-bottom") {
                $("html, body").animate({ scrollTop: 0 }, "fast");
            }
        });
    });
}