$(window).on(function() {
    $('.container').find('img').each(function() {
        var imgClass = (this.width / this.height > 1) ? 'wide' : 'tall';
        $(this).addClass(imgClass);
    })
})

var els = document.getElementsByClassName('col-sm-4 organization-card-text-overlay');
var l = els.length;

for (let i = 0; i < l; l--) {
    console.log(els);
    let el = els[i];
    console.log(els[i]);
    el.className += "-hidden";
    console.log(el.className);
    el.addEventListener("click", function() {
        if (el.className.includes("-hidden")) {
            // Hide showing cards (which will always be 1 at most), if there are any
            var showingEls = document.getElementsByClassName('organization-card-text-overlay-showing');
            if (showingEls.length > 0) {
                let showingEl = showingEls[0];
                showingEl.className = showingEl.className.replace("-showing", "-hidden")
            }
            // Show clicked card
            el.className = el.className.replace("-hidden", "-showing");
        } else {
            el.className = el.className.replace("-showing", "-hidden");
        }
    });

}