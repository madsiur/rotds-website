async function initMonstersEspers(session_var_name) {
    let json_data = await fetchJson(session_var_name);
    json_data = json_data.filter(m => m.filename != "placeholder");
    json_data = json_data.sort(function(a, b){ return compareStrings(a["name"], b["name"]); });

    for (var i = 0; i < json_data.length; i++) {
        json_data[i]["index"] = i;
        json_data[i]["is_monster"] = json_data[i]["id"] > 383 ? false: true;
    }
    return json_data;
}