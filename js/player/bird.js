import Datebus from '../databus.js'
const databus = new Datebus()

export default class Bird {
    constructor () {
        this.imgArr = [
            [databus.imgObj.bird0_0, databus.imgObj.bird0_1, databus.imgObj.bird0_2],
            [databus.imgObj.bird1_0, databus.imgObj.bird1_1, databus.imgObj.bird1_2],
            [databus.imgObj.bird2_0, databus.imgObj.bird2_1, databus.imgObj.bird2_2]]
        this.curIdx = Math.floor(Math.random() * 3)
        this.images = this.imgArr[this.curIdx]
        this.cur = 0
        this.x = 100
        this.y = 200
        this.image = this.images[this.cur]

        this.w = this.image.width
        this.h = this.image.height
        databus.addActor(this)
    }
    update () {
        this.cur += 1
        if (this.cur > 2) this.cur = 0
    }
    render () {
        this.image = this.images[this.cur]
        databus.ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
}
