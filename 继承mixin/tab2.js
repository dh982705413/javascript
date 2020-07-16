class DHanimation {
    hide (el) {
        el.style.display = "none"
    }
    show (el) {
        el.style.display = "block"
    }
    bgColor (el, color) {
        el.style.backgroundColor = color
    }
}

class Tab extends DHanimation {
    constructor() {
        super();
        this.tab = null
        this.links = null
        this.sections = null
    }
    setTab (el) {
        this.tab = document.querySelector(`${el}`)
        this.run()
    }
    run () {
        this.links = this.tab.querySelectorAll('a')
        this.sections = this.tab.querySelectorAll('section')
        this.bindEvent(this.links)
        this.action(0)
    }
    bindEvent (links) {
        links.forEach((link, i) => {
            link.addEventListener('click', () => {
                this.rest()
                this.action(i)
            })
        })
    }
    action (i) {
        this.show(this.sections[i])
        this.bgColor(this.links[i], "chocolate")
    }
    rest () {
        this.links.forEach((link, index) => {
            this.hide(this.sections[index])
            this.bgColor(link, '#999999')
        })
    }

}
export default Tab
