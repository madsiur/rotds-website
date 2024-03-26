let monsters = await initMonstersEspers("monsters");
initSessionVar(Session.DIFFICULTY, Difficulty.NORMAL);
initSessionVar(Session.MONSTER_INDEX, 0);

$(document).ready(function() {
    applyTemplateSetClicks();
    setSelectedDifficultyButton(sessionStorage.getItem(Session.DIFFICULTY));
});

function applyTemplateSetClicks() {
    var data = getData();
    var page_name = "RotDS - Monster - " + data.name;
    $(document).prop("title", page_name);
    renderMainTemplate("monsdetails", "header", "render", data);
    removeAddClassChildren("btns-diff", "button", Style.BUTTON_PRESSED, Style.BUTTON_DEFAULT);
    setClicksIndex();
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

function setClicksIndex() {
    $("#btns-prev-next > button").each(function () {
        var current_button = $(this);
        current_button.click(function(){
            log("data-index = " + $(this).attr("data-index"));
            sessionStorage.setItem(Session.MONSTER_INDEX, $(this).attr("data-index"));
            applyTemplateSetClicks();
        });
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
            removeAddClass(this, "btn-dark", "btn-secondary");
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

function getData() {
    var monster = monsters[sessionStorage.getItem(Session.MONSTER_INDEX)];
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

    var steal_common = getCleanName(monster, "loots", "steal_common");
    var steal_rare = getCleanName(monster, "loots", "steal_rare");
    var drop_common = getCleanName(monster, "loots", "drop_common");
    var drop_rare = getCleanName(monster, "loots", "drop_rare");
    
    var spirit_elements = ["spirit_a", "spirit_b"];
    var inverse_elements = ["inverse_a", "inverse_b"];
    var torment_elements = ["torment_a", "torment_b", "torment_c", "torment_d"];
    var metamorph_elements = ["metamorph_a", "metamorph_b", "metamorph_c", "metamorph_d"];
    var spirits = getStringFromNameArray(monster, "spirits", spirit_elements);
    var inverses = getStringFromNameArray(monster, "inverses", inverse_elements);
    var torments = getStringFromNameArray(monster, "torments", torment_elements);
    var metamorph = getStringFromNameArray(monster, "metamorph", metamorph_elements);
    metamorph += " (" + stats["metamorph_rate"] + " chances each)"
    
    var previous_index = index == 0 ? -1: index - 1;
    var next_index = index == monsters.length - 1 ? -1: index + 1;
    var previous_name = previous_index == -1 ? "": monsters[previous_index]["name"];
    var next_name = next_index == -1 ? "": monsters[next_index]["name"];

    var data = {
        id: monster["id"],
        name : monster["name"],
        filename : filename,   
        speed: stats["speed"],     
        attack : stats["attack"],
        hit_rate : stats["hit_rate"],
        mblock : stats["mblock"],
        evade: stats["evade"],
        defense : stats["defense"],
        mdef: stats["mdef"],
        mpow : stats["mpow"],
        hp: stats["hp"],
        mp : stats["mp"],
        gil: stats["gil"],
        exp : stats["exp"],
        level: stats["level"],
        special_attack : monster["special_attack"],
        special_attack_effect : special_attack_effect,
        immunity : immunity,
        status : status,
        absorb : absorb,
        null_elem : null_elem,
        weakness : weakness,
        misc : misc,
        steal_common : steal_common,
        steal_rare : steal_rare,
        drop_common : drop_common,
        drop_rare : drop_rare,
        spirits : spirits,
        inverses : inverses,
        torments : torments,
        metamorph : metamorph,
        previous_index: previous_index,
        next_index: next_index,
        previous_name: previous_name,
        next_name: next_name
    }

    return data;
}
