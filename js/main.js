import Databus from './databus.js'
import Background from './runtime/background.js'
import Land from './runtime/land.js'
import Pipe from './runtime/pipe.js'
import Bird from './player/bird.js'
import Score from "./player/score.js"

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
    this.score = new Score()
    // this.bg.render()
    // this.land.render()
    // this.bird.render()
  }
  update () {
    databus.ctx.clearRect(0,0,databus.canvas.width,databus.canvas.height)
    databus.actors.forEach(item => {
      item.update()
      item.render()
    })
    this.score.render()
  }
  loop () {
    requestAnimationFrame(() => {
      // 判断图片是否加载完成
      if (databus.isload) {
        // 进行场景判断，0 代表开始游戏画面 ，1 代表游戏过程中， 2 代表游戏结束
        if (databus.scene === 0) {
          // 初始化
          this.init()
          
        } else if (databus.scene === 1) {
          this.aniId++
          // 每隔 100 帧 添加一对管子
          if (this.aniId % 100 === 0) {
            const pipe = new Pipe()
            this.aniId = 0
          }
        } else if (databus.scene === 2 ) {
          databus.speed = 0
          databus.bird.cur = 0
          databus.bird.rotate = Math.PI / 2
          
        }   
        
        this.update()
      }
      this.loop()
    })
  }
  bindEvent () {
    wx.onTouchStart((result) => {
      if (databus.scene === 0) {
        this.bird.bindFly()
        databus.scene = 1
      } else if (databus.scene === 1) {
        this.bird.bindFly()
      } else if (databus.scene === 2 ) {
        databus.scene = 0
        databus.reset()
        this.status = false
      }
    })
  }
}
