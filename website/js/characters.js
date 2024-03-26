let characters = await fetchJson("characters");

$(document).ready(function() {
    var elements = [];
    for(var i = 0; i < characters.length; i++) {
        var id = characters[i];
        var name = capitalize(id);
        var element = {
            "id": id,
            "name": name,
        }
        elements.push(element);   
    }

    var data = {
        "elements": elements
    }

    renderMainTemplate("characters", "header", "render", data);

    $("#gallery > div > div > a").each(function () {
        if (typeof $(this).data("id") !== "undefined") {
            var char_id = $(this).data("id");
            $(this).click(function(){
                sessionStorage.setItem(Session.CHAR_ID, char_id);
            });
        }
    });
});