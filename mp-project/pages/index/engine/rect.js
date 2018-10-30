class Rect {
  constructor (x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  contains (touchPos) {
    if (touchPos.x > this.x && touchPos.x < this.x + this.width && touchPos.y > this.y && touchPos.y < this.y + this.height) {
      return true
    }
    return false
  }
}
export default Rect
