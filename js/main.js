import Databus from './databus.js'
const databus = new Databus()

import ResourceLoader from './base/resourceLoader.js'

export default class Main {
  constructor () {
   // 获取 canvas 画布，以及绘图上下文
   this.canvas = wx.createCanvas()
   this.ctx = this.canvas.getContext('2d')
   databus.canvas = this.canvas
   databus.ctx = this.ctx
   this.resource = new ResourceLoader()
  }
}
