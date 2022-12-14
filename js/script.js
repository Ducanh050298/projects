/* scroll animation */
(function() {
    "use strict";

    // scroll event listener
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    // scroll animation
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });

})()

/* */
function navigate_github() {
    window.location.href = 'https://github.com/Ducanh050298';
}
/* */
function navigate_linkedin() {
    window.location.href = 'https://www.linkedin.com/in/duc-anh-hoang-267b24158?fbclid=IwAR3eX7ANgdg0oRjL1esr1nZNrLBBn43E9veEpbNrZMwCxO6Xl1B3SFJ3PzU';
}
/* */
function navigate_facebook() {
    window.location.href = 'https://www.facebook.com/duc.a.hoang.3';
}
/* */
function navigate_instagram() {
    window.location.href = 'https://www.instagram.com/_david_anh';
}

/* */
function navigate_project_1() {  
    window.location.href = 'https://github.com/truongnguyen14/Online-shopping';
}

/* */
function navigate_project_2() {
    window.location.href = 'https://github.com/Ducanh050298/Pygame';
}

/* */
function navigate_project_3() {
    window.location.href = 'https://github.com/s3891667/Full_Stack_Website';
}

/* */
function navigate_project_4() {
    console.log("navigating to project 4");
}

/* Handle typing animation */

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    var styles = 'span { text-decoration : none; }';

    if (css.styleSheet)
        css.styleSheet.cssText = styles;
    else
        css.appendChild(document.createTextNode(styles));

    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #999494}";
    document.body.appendChild(css);
};
