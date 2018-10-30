import Vec2 from './vec2'
import Node from './node'
class Scene extends Node {
  constructor (canvasName) {
    super()
    this.canvas = wx.createCanvasContext(canvasName)
    this._fps = 1000 / 60
    this._nowTime = new Date().getTime()
    this.setInterval = setInterval(this.update.bind(this), this._fps)
    this.children = []
  }
  recursionChild (object, dt) {
    if (this.isDestroy) {
      return
    }
    for (let i = 0; i < object.children.length; i++) {
      object.children[i].draw(this.canvas, dt, object)
      this.recursionChild(object.children[i], dt)
    }
  }
  update () {
    let currentTime = new Date().getTime()
    let dt = currentTime - this._nowTime
    this._nowTime = currentTime
    // for (let i = 0; i < this.children.length; i++) {
    //   this.children[i].draw(this.canvas, dt)
    // }

    this.recursionChild(this, dt)

    this.canvas.draw()
  }

  destroy () {
    this.isDestroy = true
    console.log('销毁')
    this.children = []
    this.canvas.draw()
    clearInterval(this.setInterval)
  }
  touchStart (event) {
    let touchPos = new Vec2(event.touches[0].x, event.touches[0].y)
    for (let i = 0; i < this.children.length; i++) {
      let child = this.children[i]
      if (child.interactive) {
        let rect = child.getRect()
        if (rect.contains(touchPos)) {
          child.touchStart()
        }
      }
    }
  }
  touchMove (event) {

  }
  touchEnd () {
    for (let i = 0; i < this.children.length; i++) {
      let child = this.children[i]
      if (child.interactive) {
        child.touchEnd()
      }
    }
  }
}
export default Scene
