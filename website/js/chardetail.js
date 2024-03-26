initSessionVar(Session.CHAR_ID, "aurora");
let path = "characters/" + sessionStorage.getItem(Session.CHAR_ID);
let character = await fetchJson(path);

$(document).ready(function() {
    applyTemplateSetClicks()
});

function applyTemplateSetClicks() {
    var prev_name = character["prev_id"] == -1 ? "": capitalize(character["prev_id"]);
    var next_name = character["next_id"] == -1 ? "": capitalize(character["next_id"]);

    var data = {
        "character": character,
        "prev_name": prev_name,
        "next_name": next_name
    }

    renderMainTemplate("chardetail", "header", "render", data);

    var page_name = "RotDS - " + character["name"];
    $(document).prop("title", page_name);
    setClicksIndex();
}

function setClicksIndex() {
    $("#btns-prev-next > button").each(function () {
        var current_button = $(this);
        current_button.click(async function(){
            log("data-id = " + $(this).attr("data-id"));
            sessionStorage.setItem(Session.CHAR_ID, $(this).attr("data-id"));
            path = "characters/" + sessionStorage.getItem(Session.CHAR_ID);
            character = await fetchJson(path);
            applyTemplateSetClicks();
        });
    });
}