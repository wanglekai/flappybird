import Datebus from '../databus.js'
const databus = new Datebus()

export default class Background {
    constructor () {
        this.imgArr = [databus.imgObj.bg_day, databus.imgObj.bg_night]
        this.curIdx = Math.floor(Math.random() * 2)
        this.bg = this.imgArr[this.curIdx]
        this.x = 0
        this.y = 0
        this.w = databus.canvas.width
        this.h = databus.canvas.height
    }
    render () {
        console.log('render');
        databus.ctx.drawImage(this.bg, this.x, this.y, this.w, this.h)
    }
}
