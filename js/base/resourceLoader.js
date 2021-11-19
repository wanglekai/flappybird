import { Resources } from './resources.js'
import Databus from '../databus.js'
const databus = new Databus()

export default class ResourceLoader {
    constructor () {
        this.srcs = Resources
        this.maxcount = Object.keys(this.srcs).length
        this.count = 0
        this.loadResources()
    }
    loadResources () {
        /**
         * 需要存储所有图片对象到一个对象中
         * 创建多个新的图片对象, 并给对象的 src 属性赋值
         * 保证图片加载完成，然后才能进行下一步操作
         */
       for (let k in this.srcs) {
           databus.imgObj[k] = wx.createImage()
           databus.imgObj[k].src = this.srcs[k]
           databus.imgObj[k].onload = () => {
               this.count++
               if (this.count >= this.maxcount) {
                   console.log('图片资源以全部加载')
                   console.log('图片个数: ', this.count)
                   databus.isload = true
               }
           }
       }
    }
}
