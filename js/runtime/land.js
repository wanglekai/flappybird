import Datebus from '../databus.js'
const databus = new Datebus()

export default class Land {
    constructor () {
        this.land = databus.imgObj.land
        this.x = 0
        this.y = databus.canvas.height - this.land.height
        this.w = this.land.width
        this.h = this.land.height
        // this.h = databus.canvas.height
        databus.addActor(this)
    }
    update () {
        this.x -= databus.speed
        if (this.x <= -this.w) {
            this.x = 0
        }
    }
    render () {
        databus.ctx.drawImage(this.land, this.x, this.y, this.w, this.h)
        databus.ctx.drawImage(this.land, this.x + this.w, this.y,this.w, this.h)
        databus.ctx.drawImage(this.land, this.x + this.w * 2, this.y,this.w, this.h)
    }
}
