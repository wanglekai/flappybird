let instance

export default class Databus {
    constructor () {
        if (instance) return instance
        instance = this
        this.canvas
        this.ctx
        this.imgObj = {}
        this.isload = false
        this.speed = 2
    }
}
