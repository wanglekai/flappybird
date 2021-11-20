import Databus from './databus.js'
import Background from './runtime/background.js'
import Land from './runtime/land.js'
import Pipe from './runtime/pipe.js'
import Bird from './player/bird.js'

wx.setPreferredFramesPerSecond(30)

const databus = new Databus()

import ResourceLoader from './base/resourceLoader.js'

export default class Main {
  constructor () {
   // 获取 canvas 画布，以及绘图上下文
   this.canvas = wx.createCanvas()
   this.ctx = this.canvas.getContext('2d')
   this.aniId = 0
   this.skip = 100

   databus.canvas = this.canvas
   databus.ctx = this.ctx
   this.resource = new ResourceLoader()
   this.status = false
   this.loop()
   this.bindEvent()
  }
  init () {
    if (this.status) return
    this.status = true
    this.bg = new Background()
    this.land = new Land()
    this.bird = new Bird()
    // this.bg.render()
    // this.land.render()
    // this.bird.render()
  }
  updata () {
    databus.ctx.clearRect(0,0,databus.canvas.width,databus.canvas.height)
    databus.actors.forEach(item => {
      item.update()
      item.render()
    })
  }
  loop () {
    requestAnimationFrame(() => {
      console.log(this.aniId);
      if (databus.isload) {
        this.init()
        // const pipe = new Pipe()
        this.aniId++

        // if (this.aniId)

        if (this.aniId % this.skip === 0) {
          const pipe = new Pipe()
        }
        this.updata()
      }
      this.loop()
    })
  }
  bindEvent () {
    wx.onTouchStart((result) => {
      this.bird.bindFly()
     
    })
  }
}
