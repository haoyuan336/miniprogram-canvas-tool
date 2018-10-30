
import Node from './node'
class Text extends Node {
  constructor(str, spec) {
    super()
    let style = {};
    if (spec) {
      style = spec;
    }
    this.style = {
      style: style.style ? style.style : 'normal',
      variant: style.variant ? style.variant : 'normal',
      weight: style.weight ? style.weight : 'normal',
      size: style.size ? style.size : '20px',
      font: style.font ? style.font : 'Arial'
    }
    this.height = parseInt(this.style.size.substring(0, this.style.size.length - 2));
    console.log('height =  ' + this.height); 
    this.text = str
    this.children = []
  }
  draw(canvas, dt, parent) {
    canvas.translate(parent.position.x + this.position.x, parent.position.y + this.position.y)
    let font = ''

    for (let i in this.style) {
      font += this.style[i] + ' '
    }
    canvas.font = font;
    this.width = canvas.measureText(this.text).width
    let color = 'rgba(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ',' + this.color.a + ')'
    canvas.fillStyle = color
    canvas.fillText(this.text, this.width * -this.anchor.x, this.height *  this.anchor.y);
    canvas.translate(-parent.position.x - this.position.x, -parent.position.y - this.position.y)
  }
}
export default Text
