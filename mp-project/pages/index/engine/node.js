import Vec2 from './vec2'
import Rect from './rect'
import Color from './color'
class Node {
  constructor () {
    this.position = new Vec2(0, 0)
    this.anchor = new Vec2(0.5, 0.5)
    this.rotation = 0
    this.scale = new Vec2(1, 1)
    this.isRender = false
    this.register = []
    this.alpha = 1
    this.interactive = false
    this.children = []
    this.color = new Color(0,0,0);
    this.width = 100;
    this.height = 100;
  }
  update (dt) {
    if (!this.onLoaded && this.onLoad) {
      this.onLoaded = true
      this.onLoad()
    }
    if (this.isRender) {
      for (let i = 0; i < this.register.length; i++) {
        this.register[i](dt)
      }
    }
  }
  registerUpdate (cb) {
    this.register.push(cb)
  }
  draw () {

  }
  addChild (child) {
    this.children.push(child)
  }
  getRect () {
    return new Rect(
      this.position.x - this.width * this.anchor.x * this.scale.x,
      this.position.y - this.height * this.anchor.y * this.scale.y,
      this.width * this.scale.x,
      this.height * this.scale.y)
  }
}
export default Node
