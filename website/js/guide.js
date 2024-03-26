let guide_data = await fetchJson("guide");
guide_data = guide_data.sort(function(a, b){ return compareInts(a["id"], b["id"]); });

$(document).ready(function() {
    var data = {
        "guide_data": guide_data
    }
    renderMainTemplate("guide", "header", "render", data);

    $("#wob-toc > li > a").each(function () {
        if (typeof $(this).data("page") !== "undefined") {
            var guide_page = $(this).data("page");
            $(this).click(function(){
                sessionStorage.setItem(Session.GUIDE_PAGE, guide_page);
            });
        }
    });
    
    $("#wor-toc > li > a").each(function () {
        if (typeof $(this).data("page") !== "undefined") {
            var guide_page = $(this).data("page");
            $(this).click(function(){
                sessionStorage.setItem(Session.GUIDE_PAGE, guide_page);
            });
        }
    });
});