function extend (sub, sup) {
    sub.prototype = Object.create(sup.prototype);
    Object.defineProperty(sub.prototype, "constructor", {
        value: sub,
        enumerable: false,
    });
}
function Animation () { }
Animation.prototype.show = function () {
    this.style.display = "block";
};
Animation.prototype.hide = function () {
    this.style.display = "none";
};
Animation.prototype.bgColor = function (color) {
    this.style.backgroundColor = color;
};

function Tab () {
    this.tab = null;
    this.links = null;
    this.sections = null;
}
extend(Tab, Animation);
Tab.prototype.setTab = function (el) {
    this.tab = document.querySelector(`${el}`)
    this.run()
}
Tab.prototype.run = function () {
    this.links = this.tab.querySelectorAll("a");
    this.sections = this.tab.querySelectorAll("section");
    this.bindeEvent();
    this.action(0);
};
Tab.prototype.action = function (i) {
    this.bgColor.call(this.links[i], "chocolate");
    this.show.call(this.sections[i]);
};
Tab.prototype.rest = function () {
    this.links.forEach((el, i) => {
        this.bgColor.call(el, "#999999");
        this.hide.call(this.sections[i]);
    });
};
Tab.prototype.bindeEvent = function () {
    this.links.forEach((link, i) => {
        link.addEventListener("click", () => {
            this.rest();
            this.action(i);
        });
    });
};

export default Tab