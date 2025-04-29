initSessionVar(Session.MAP_DISPLAYED, Maps.WOB);

$(document).ready(function() {
    applyTemplateSetClicks();
    setSelectedDifficultyButton(sessionStorage.getItem(Session.MAP_DISPLAYED));
});

function applyTemplateSetClicks() {
    showImage();
    removeAddClassChildren("btns-maps", "button", Style.BUTTON_PRESSED, Style.BUTTON_DEFAULT);
    setClicksDiff(sessionStorage.getItem(Session.MAP_DISPLAYED));
}

function setSelectedDifficultyButton(diff) {
    $("#btns-maps > button").each(function () {
        var diff_child = $(this).attr("data-map");
        if (diff === diff_child) {
            removeAddClass(this, Style.BUTTON_DEFAULT, Style.BUTTON_PRESSED);
        }
    });
}

function setClicksDiff(diff) {
    $("#btns-maps > button").each(function () {
        var current_button = $(this);
        var child_diff = current_button.attr("data-map");
        current_button.off('click').on('click', function(){
            sessionStorage.setItem(Session.MAP_DISPLAYED, $(this).attr("data-map"));
            applyTemplateSetClicks();
        });
        if (diff == child_diff) {
            removeAddClass(this, Style.BUTTON_DEFAULT, Style.BUTTON_PRESSED);
        }
    });
}

function showImage() {
    if (sessionStorage.getItem(Session.MAP_DISPLAYED) === Maps.WOB) {
        $("#wor").hide();
        $("#wob").show();
    } else if (sessionStorage.getItem(Session.MAP_DISPLAYED) === Maps.WOR) {
        $("#wob").hide();
        $("#wor").show();
    }
}