$(window).on(function() {
    $('.container').find('img').each(function() {
        var imgClass = (this.width / this.height > 1) ? 'wide' : 'tall';
        $(this).addClass(imgClass);
    })
})

var els = document.getElementsByClassName('col-sm-4 organization-card-text-overlay');
var els2 = document.getElementsByClassName('col-sm-4 big-team organization-card-text-overlay');
var els3 = document.getElementsByClassName('col-sm-4 bugged organization-card-text-overlay');
var els4 = document.getElementsByClassName('col-sm-4 bugged2 organization-card-text-overlay');
var els5 = document.getElementsByClassName('col-sm-4 medium-team organization-card-text-overlay');
var els6 = document.getElementsByClassName('col-sm-4 small-team organization-card-text-overlay');
var els7 = document.getElementsByClassName('col-sm-4 small-team bugged3 organization-card-text-overlay');
Array.prototype.forEach.call(els6, function(el) {
    // Do stuff here
    el.className = "col-sm-4 small-team bugged3 organization-card-text-overlay-hidden";
    el.addEventListener("click", function() {
        if (el.className == "col-sm-4 small-team bugged3 organization-card-text-overlay-hidden")
            el.className = "col-sm-4 small-team bugged3 organization-card-text-overlay-showing";
        else
            el.className = "col-sm-4 small-team bugged3 organization-card-text-overlay-hidden";
    });
    console.log("ai1");
});
Array.prototype.forEach.call(els6, function(el) {
    // Do stuff here
    el.className = "col-sm-4 small-team organization-card-text-overlay-hidden";
    el.addEventListener("click", function() {
        if (el.className == "col-sm-4 small-team organization-card-text-overlay-hidden")
            el.className = "col-sm-4 small-team organization-card-text-overlay-showing";
        else
            el.className = "col-sm-4 small-team organization-card-text-overlay-hidden";
    });
    console.log("ai2");
});
Array.prototype.forEach.call(els5, function(el) {
    // Do stuff here
    el.className = "col-sm-4 medium-team organization-card-text-overlay-hidden";
    el.addEventListener("click", function() {
        if (el.className == "col-sm-4 medium-team organization-card-text-overlay-hidden")
            el.className = "col-sm-4 medium-team organization-card-text-overlay-showing";
        else
            el.className = "col-sm-4 medium-team organization-card-text-overlay-hidden";
    });
    console.log("ai3");
});
Array.prototype.forEach.call(els, function(el) {
    // Do stuff here
    el.className = "col-sm-4 organization-card-text-overlay-hidden";
    el.addEventListener("click", function() {
        if (el.className == "col-sm-4 organization-card-text-overlay-hidden")
            el.className = "col-sm-4 organization-card-text-overlay-showing";
        else
            el.className = "col-sm-4 organization-card-text-overlay-hidden";
    });
    console.log("ai4");
});
Array.prototype.forEach.call(els2, function(el) {
    // Do stuff here
    el.className = "col-sm-4 big-team organization-card-text-overlay-hidden";
    el.addEventListener("click", function() {
        if (el.className == "col-sm-4 big-team organization-card-text-overlay-hidden")
            el.className = "col-sm-4 big-team organization-card-text-overlay-showing";
        else
            el.className = "col-sm-4 big-team organization-card-text-overlay-hidden";
    });
    console.log("ai5");
});
Array.prototype.forEach.call(els3, function(el) {
    // Do stuff here
    el.className = "col-sm-4 bugged organization-card-text-overlay-hidden";
    el.addEventListener("click", function() {
        if (el.className == "col-sm-4 bugged organization-card-text-overlay-hidden")
            el.className = "col-sm-4 bugged organization-card-text-overlay-showing";
        else
            el.className = "col-sm-4 bugged organization-card-text-overlay-hidden";
    });
    console.log("ai6");
});
Array.prototype.forEach.call(els4, function(el) {
    // Do stuff here
    el.className = "col-sm-4 bugged2 organization-card-text-overlay-hidden";
    el.addEventListener("click", function() {
        if (el.className == "col-sm-4 bugged2 organization-card-text-overlay-hidden")
            el.className = "col-sm-4 bugged2 organization-card-text-overlay-showing";
        else
            el.className = "col-sm-4 bugged2 organization-card-text-overlay-hidden";
    });
    console.log("ai7");
});