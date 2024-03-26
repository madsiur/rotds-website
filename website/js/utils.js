async function fetchJson(file_name) {
    var url = "./json/" + file_name + ".json";
    let response = await fetch(url, { headers: { "Content-Type": "application/json" } });
    let data =  await response.json();
    return data;
}

function toHexString(number, padding) {
    var strNum = number.toString(16).toUpperCase();
    var loop = padding - strNum.length > 0 ? padding - strNum.length: 0;
    for(var i = 0; i < loop; i++) {
        strNum = "0" + strNum;
    }
    return strNum;
}

function compareStrings(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();  
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function compareInts(a, b) {
    //a = parseInt(a);
    //b = parseInt(b);
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function addClassChildren(element, child_type, child_class) {
    element = typeof element === 'string' ? "#" + element + " > " + child_type: element;
    $(element).each(function () {
        $(this).addClass(child_class);
    });
}

function removeClassChildren(element, child_type, child_class) {
    element = typeof element === 'string' ? "#" + element + " > " + child_type: element;
    $(element).each(function () {
        $(this).removeClass(child_class);
    });
}

function removeAddClassChildren(element, child_type, child_class_to_remove, child_class_to_add) {
    removeClassChildren(element, child_type, child_class_to_remove);
    addClassChildren(element, child_type, child_class_to_add);
}

function removeAddClass(element, class_to_remove, class_to_add) {
    element = typeof element === 'string' ? "#" + element: element;
    $(element).removeClass(class_to_remove).addClass(class_to_add);
}

function initSessionVar(session_var_name, init_value) {
    if(sessionStorage.getItem(session_var_name) === null) {
        sessionStorage.setItem(session_var_name, init_value);
    }
}

function render(tmpl_name, tmpl_data) {
    if (!render.tmpl_cache) { 
        render.tmpl_cache = {};
    }

    if (!render.tmpl_cache[tmpl_name] ) {
        var tmpl_dir = "templates";
        var tmpl_url = tmpl_dir + '/' + tmpl_name + ".html";
        var tmpl_string;
        $.ajax({
            url: tmpl_url,
            method: "GET",
            dataType: "html",
            async: false,
            success: function(data) {
                tmpl_string = data;
            }
        });

        render.tmpl_cache[tmpl_name] = _.template(tmpl_string);
    }
    return render.tmpl_cache[tmpl_name](tmpl_data);
}

function renderMainTemplate(template_path, header_path, render_id, data) {
    render_id = "#" + render_id;
    $(render_id).html("");

    var rendered_header = render(header_path, {});
    var rendered_template = render(template_path, data);
    var rendered_webpage = rendered_header + rendered_template;
    $(render_id).html(rendered_webpage);
}

function renderTemplate(template_path, render_id, data) {
    render_id = "#" + render_id;
    $(render_id).html("");
    
    var rendered_template = render(template_path, data);
    $(render_id).html(rendered_template);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*async function fetchSessionJson(session_var_name) {
    if(sessionStorage.getItem(session_var_name) === null) {
        log(session_var_name + " does not exists.");
        var json_content = await fetchJson(url);
        var compressed_string = LZString.compress(JSON.stringify(json_content))
        sessionStorage.setItem(session_var_name, compressed_string);
    } else {
        log(session_var_name + " exists.");
        var compressed_string = sessionStorage.getItem(session_var_name);
        var decompressed_string = LZString.decompress(compressed_string);
        json_content = JSON.parse(decompressed_string);
    }
    return json_content
}*/