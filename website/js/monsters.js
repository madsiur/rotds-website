var sortedMonsters = [];
var sortedEspers = [];

$(document).ready(function() {
    sortedEspers = monsters.filter(m => m.id >= 384 && m.filename != "");
    sortedEspers.sort(getSortOrder("name"));
    sortedMonsters = monsters.filter(m => m.id < 384 && m.filename != "");
    sortedMonsters.sort(getSortOrder("name"));
    removeSelectedClass();
    addClassCurrentBtn('#monsBtn0a', '#monsBtn0b');
    loadImages(0);
});

function loadImages(id) {
    if(id == 4) {
        generateGallery(sortedEspers);
    } else {
        var min = id * 100;
        var max = id == 3 ? sortedMonsters.length: (id + 1) * 100;
        generateGallery(sortedMonsters.slice(min, max));
    }
}

function generateGallery(monsters) {
    var gallery = $('#monsGallery');
    gallery.empty();

    $.each(monsters, function(key,value) {

        var mainDiv = $('<div class="d-flex flex-column align-items-center mb-2 mx-2 mons-img-div"></div>');
        var imgDiv = $('<div class="mt-auto"></div>');
        var img = $('<img src="monsters/' + value.filename + '.png"></img>');
        var nameDiv = $('<div>' + value.name + '</div>');

        imgDiv.append(img);
        mainDiv.append(imgDiv);
        mainDiv.append(nameDiv);
        gallery.append(mainDiv);
    });
}

function getSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}

$('#monsBtn0a').click(function(){
    removeSelectedClass();
    addClassCurrentBtn('#monsBtn0a', '#monsBtn0b');
    loadImages(0);
});

$('#monsBtn0b').click(function(){
    removeSelectedClass();
    addClassCurrentBtn('#monsBtn0a', '#monsBtn0b');
    loadImages(0);
});

$('#monsBtn1a').click(function(){
    removeSelectedClass();
    addClassCurrentBtn('#monsBtn1a', '#monsBtn1b');
    loadImages(1);
});

$('#monsBtn1b').click(function(){
    removeSelectedClass();
    addClassCurrentBtn('#monsBtn1a', '#monsBtn1b');
    loadImages(1);
});

$('#monsBtn2a').click(function(){
    removeSelectedClass();
    addClassCurrentBtn('#monsBtn2a', '#monsBtn2b');
    loadImages(2);
});

$('#monsBtn2b').click(function(){
    removeSelectedClass();
    addClassCurrentBtn('#monsBtn2a', '#monsBtn2b');
    loadImages(2);
});

$('#monsBtn3a').click(function(){
    removeSelectedClass();
    addClassCurrentBtn('#monsBtn3a', '#monsBtn3b');
    loadImages(3);
});

$('#monsBtn3b').click(function(){
    removeSelectedClass();
    addClassCurrentBtn('#monsBtn3a', '#monsBtn3b');
    loadImages(3);
});

$('#monsBtn4a').click(function(){
    removeSelectedClass();
    addClassCurrentBtn('#monsBtn4a', '#monsBtn4b');
    $('#pageTitle').html('Esper Sprites');
    loadImages(4);
});

$('#monsBtn4b').click(function(){
    removeSelectedClass();
    addClassCurrentBtn('#monsBtn4a', '#monsBtn4b');
    $('#pageTitle').html('Esper Sprites');
    loadImages(4);
});

function addClassCurrentBtn(btn1, btn2) {
    $(btn1).removeClass('btn-dark');
    $(btn1).addClass('btn-secondary');
    $(btn2).removeClass('btn-dark');
    $(btn2).addClass('btn-secondary');
}

function removeSelectedClass() {
    $('#pageTitle').html('Monster Sprites');
    $('#monsBtn0a').removeClass('btn-secondary');
    $('#monsBtn1a').removeClass('btn-secondary');
    $('#monsBtn2a').removeClass('btn-secondary');
    $('#monsBtn3a').removeClass('btn-secondary');
    $('#monsBtn4a').removeClass('btn-secondary');
    $('#monsBtn0b').removeClass('btn-secondary');
    $('#monsBtn1b').removeClass('btn-secondary');
    $('#monsBtn2b').removeClass('btn-secondary');
    $('#monsBtn3b').removeClass('btn-secondary');
    $('#monsBtn4b').removeClass('btn-secondary');
    $('#monsBtn0a').addClass('btn-dark');
    $('#monsBtn1a').addClass('btn-dark');
    $('#monsBtn2a').addClass('btn-dark');
    $('#monsBtn3a').addClass('btn-dark');
    $('#monsBtn4a').addClass('btn-dark');
    $('#monsBtn0b').addClass('btn-dark');
    $('#monsBtn1b').addClass('btn-dark');
    $('#monsBtn2b').addClass('btn-dark');
    $('#monsBtn3b').addClass('btn-dark');
    $('#monsBtn4b').addClass('btn-dark');
}