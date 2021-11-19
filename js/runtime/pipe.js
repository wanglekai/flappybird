import Databus from "../databus.js"
const databus = new Databus()

export default class Pipe {
  constructor () {    
    this.image1 = databus.imgObj.pipe_down
    this.image2 = databus.imgObj.pipe_up
    this.x = databus.canvas.width
    this.y1 = 0
    this.w = this.image1.width
    this.h1 = Math.floor(Math.random() * (300 - 200 + 1)) + 200
    this.door = Math.floor(Math.random() * (130 - 100 + 1)) + 100
    this.y2 = this.h1 + this.door
    this.h2 = databus.canvas.height - this.y2 - databus.imgObj.land.height
    this.sy1 = this.image1.height - this.h1
    this.noPass = true
    databus.addActor(this)
  }
  update () {
    this.x -= databus.speed
    // 销毁点
    if (this.x <= - this.w) {
      this.die()
    } 
  }
  render () {
    databus.ctx.drawImage(this.image1, 0, this.sy1, this.w, this.h1, this.x, this.y1, this.w, this.h1)
    databus.ctx.drawImage(this.image2, 0, 0, this.w, this.h2, this.x, this.y2, this.w, this.h2)
  }
  die () {
    databus.actors = databus.actors.filter(item => {
      return item !== this
    })
  }
}