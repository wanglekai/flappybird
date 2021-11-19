import Datebus from '../databus.js'
const databus = new Datebus()

export default class Background {
    constructor () {
        this.imgArr = [databus.imgObj.bg_day, databus.imgObj.bg_night]
        this.curIdx = Math.floor(Math.random() * 2)
        this.bg = this.imgArr[this.curIdx]
        this.x = 0
        this.y = 0
        this.w = this.bg.width
        // this.h = this.bg.height
        this.h = databus.canvas.height
    }
    update () {
        this.x -= databus.speed
        if (this.x <= -this.w) {
            this.x = 0
        }
    }
    render () {
        console.log('render');
        databus.ctx.drawImage(this.bg, this.x, this.y, this.w, this.h)
        databus.ctx.drawImage(this.bg, this.x + this.w, this.y,this.w, this.h)
        databus.ctx.drawImage(this.bg, this.x + this.w * 2, this.y,this.w, this.h)
    }
}
