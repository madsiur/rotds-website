initSessionVar(Session.DIFFICULTY, Difficulty.NORMAL);

var page_name = window.location.pathname.split("/").pop().replace(".html", "");
if (!isInt(page_name, 0, 383)) {
    window.location.replace("monsters.html");
}

let monster_id = parseInt(page_name);
let monster = await fetchJson("../json/monsters/" + monster_id + ".json");

$(document).ready(function() {
    applyTemplateSetClicks();
    setSelectedDifficultyButton(sessionStorage.getItem(Session.DIFFICULTY));
});

function applyTemplateSetClicks() {
    setData();
    removeAddClassChildren("btns-diff", "button", Style.BUTTON_PRESSED, Style.BUTTON_DEFAULT);
    setClicksDiff(sessionStorage.getItem(Session.DIFFICULTY));
}

function setSelectedDifficultyButton(diff) {
    $("#btns-diff > button").each(function () {
        var diff_child = $(this).attr("data-diff");
        if (diff === diff_child) {
            removeAddClass(this, Style.BUTTON_DEFAULT, Style.BUTTON_PRESSED);
        }
    });
}

function setClicksDiff(diff) {
    $("#btns-diff > button").each(function () {
        var current_button = $(this);
        var child_diff = current_button.attr("data-diff");
        current_button.click(function(){
            log("diff = " + $(this).attr("data-diff"));
            sessionStorage.setItem(Session.DIFFICULTY, $(this).attr("data-diff"));
            applyTemplateSetClicks();
        });
        if (diff == child_diff) {
            removeAddClass(this, Style.BUTTON_DEFAULT, Style.BUTTON_PRESSED);
        }
    });
}

function byteFlagsToString(stats, byte_description) {
    return stats[byte_description].length > 0 ? stats[byte_description].join(", ") : "None";
}

function getCleanName(monster, depth_1, depth_2) {
    var regex_icon = / *\[[^)]*\] */g;
    return monster[depth_1][depth_2]["name"].replace(regex_icon, "");
}

function getStringFromNameArray(monster, depth_1, depht_2_list) {
    var elements = [];
    for(var i = 0; i < depht_2_list.length; i++) {
        if(monster[depth_1][depht_2_list[i]]["name"] != "Nothing") {
            elements.push(getCleanName(monster, depth_1, depht_2_list[i]));
        }
    }
    return elements.length > 0 ? elements.join(", "): "None";
}

function setHTML(id, value) {
    $("#" + id).html(value);
}


function setData() {
    var stats = monster["stats"][sessionStorage.getItem(Session.DIFFICULTY)];
    var index = monster["index"];
    var filename = "monsters/" + monster["filename"] + ".png";

    var immunity = byteFlagsToString(stats, "immunity");
    var status = byteFlagsToString(stats, "status");
    var absorb = byteFlagsToString(stats, "absorb");
    var null_elem = byteFlagsToString(stats, "null");
    var weakness = byteFlagsToString(stats, "weakness");
    var misc = byteFlagsToString(stats, "misc");
    var special_attack_flags = byteFlagsToString(stats, "special_attack_flags");

    var special_attack_effect = special_attack_flags == "None"? 
        stats["special_attack_effect"] : 
        stats["special_attack_effect"] + ", " + special_attack_flags;
    
    var metamorph_elements = ["metamorph_a", "metamorph_b", "metamorph_c", "metamorph_d"];
    var metamorph = getStringFromNameArray(monster, "metamorph", metamorph_elements);
    metamorph += " (" + stats["metamorph_rate"] + ")";

    setHTML("level", stats["level"]);
    setHTML("hp", stats["hp"]);
    setHTML("mp", stats["mp"]);
    setHTML("attack", stats["attack"]);
    setHTML("mpow", stats["mpow"]);
    setHTML("defense", stats["defense"]);
    setHTML("mdef", stats["mdef"]);
    setHTML("evade", stats["evade"]);
    setHTML("mblock", stats["mblock"]);
    setHTML("hit-rate", stats["hit_rate"]);
    setHTML("speed", stats["speed"]);
    setHTML("exp", stats["exp"]);
    setHTML("gil", stats["gil"]);
    setHTML("immunity", immunity);
    setHTML("status", status);
    setHTML("absorb", absorb);
    setHTML("null-elem", null_elem);
    setHTML("weakness", weakness);
    setHTML("misc", misc);
    setHTML("special-attack-effect", special_attack_effect);
    setHTML("metamorph", metamorph);
}
