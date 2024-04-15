async function fetchJson(url) {
    let response = await fetch(url, { headers: { "Content-Type": "application/json" } });
    let data =  await response.json();
    return data;
}

function getUrlParams() {
    var params = {};
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    $.each(vars, function(index, value) {
        var pair = value.split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    });
    return params;
}

function isInt(str, min, max) {
    if(str !== null) {
        if (!isNaN(str) && Number.isInteger(parseInt(str))) {
            integer = parseInt(str);
            if(str.length >= min && str.length <= max) {
                return true;
            }
        }
    }
    return false;
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

    //if (!render.tmpl_cache[tmpl_name] ) {
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
    //}
    return render.tmpl_cache[tmpl_name](tmpl_data);
}

function renderMainTemplate(template_path, render_id, data) {
    render_id = "#" + render_id;
    $(render_id).html("");

    var rendered_header = render("header", {});
    var rendered_template = render(template_path, data);
    //var rendered_footer = render("footer", {});
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