const ShapeType = {
  'rect': 1
}
class Rect {
  constructor (rect, style) {
    this.x = rect.x
    this.y = rect.y
    this.width = rect.width
    this.height = rect.height
    this.shapeType = ShapeType.rect
    this.color = style.color
    this.alpha = style.alpha
  }
}
class Graphics {
  constructor () {
    this.drawList = []
    this.children = []
  }
  draw (canvas, dt) {
    for (let i = 0; i < this.drawList.length; i++) {
      let child = this.drawList[i]
      switch (child.shapeType) {
        case ShapeType.rect:
          let color = 'rgba(' + child.color.r + ',' + child.color.g + ',' + child.color.b + ',' + child.alpha + ')'
          canvas.fillStyle = color
          canvas.fillRect(child.x, child.y, child.width, child.height)
          canvas.fillStyle = 'rgba(0, 0, 200, 1)'
          break
        default:
          break
      }
    }
  }
  drawRect (rect, style) {
    let node = new Rect(rect, style)
    this.drawList.push(node)
  }
  clearAll () {
    this.drawList = []
  }
}
export default Graphics
