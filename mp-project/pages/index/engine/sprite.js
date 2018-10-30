import Vec2 from './vec2'
import Node from './node'
class Sprite extends Node {
  constructor(spec) {
    super()
    let res = {};
    if (spec) {
      res = spec;
    }
    console.log('create sprite = ' + JSON.stringify(res));
    this.imagePath = res.path ? res.path : undefined;
    this.height = res.height ? res.height : 100;
    this.width = res.width ? res.width : 100;
    this.color = res.color ? res.color : this.color;
    this.position = new Vec2(0, 0)
    this.anchor = new Vec2(0.5, 0.5)
    this.rotation = 0
    this.scale = new Vec2(1, 1)
    this.isRender = false
    this.register = []
    this.alpha = 1
    this.interactive = false
    this.children = []
  }

  draw(canvas, dt, parent) {
    canvas.translate(this.position.x + parent.position.x, this.position.y + parent.position.y)
    if (this.imagePath) {
      this.isRender = true
      // canvas.translate(this.)
      let endX = this.position.x - this.anchor.x * this.scale.x * this.width
      let endY = this.position.y - this.anchor.y * this.scale.y * this.height

      
      canvas.rotate(this.rotation)
      canvas.globalAlpha = this.alpha
      canvas.drawImage(
        // 左上角为00点
        this.imagePath, // 需要绘制的图片的本地路径
        endX - this.position.x, // 在canvas里面的相对x位置
        endY - this.position.y, // 在canvas里面的相对y位置
        this.scale.x * this.width, // 缩放后的宽度
        this.scale.y * this.height, // 缩放后的高度
        this.width, // 需要绘制的图片宽度
        this.height // 需要绘制的图片高度
      )
      canvas.globalAlpha = 1
      canvas.rotate(-this.rotation)
      
    } else {
      let color = 'rgba(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ',' + this.color.a + ')'
      canvas.fillStyle = color
      canvas.fillRect(0, 0, this.width, this.height)
      canvas.fillStyle = 'rgba(0, 0, 200, 1)'
    }
    canvas.translate(-this.position.x - parent.position.x, -this.position.y - parent.position.y);
    this.update(dt)
  }
  changeRes(res) {
    this.imagePath = res.path
    this.width = res.width
    this.height = res.height
  }
}
export default Sprite
