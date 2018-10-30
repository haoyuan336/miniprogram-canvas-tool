import Node from './node'
import Vec2 from './vec2'
import Color from './color';
import Text from './text'
import Sprite from './sprite';
class Button extends Node {
  constructor(props) {
    super();
    this.interactive = true
    this.isScaleAction = false

    // this.pressStyle = props.pressStyle
    // this.registerUpdate(this.buttonUpdate.bind(this))
    // if (props.click) {
    //   this.clickCb = props.click
    // }
    // if (props.clickCb) {
    //   this.clickCb = props.clickCb
    // }

    // this.textLabel = new Text('button');
    // this.addChild(this.textLabel); 
    this.isTouched = false

    let spec = {
      normal: {width: 80, height: 40},
      text: 'button',
      click: ()=>{
        console.worn('no set click callback method');
      }
    };
    if (props){
      spec.normal = props.normal?props.normal:spec.normal;
      spec.text = props.text?props.text:spec.props;
    }


    spec.normal.color = new Color(200,255,255);
    this.normalSprite = new Sprite(spec.normal);
    this.addChild(this.normalSprite);
    this.normalSprite.position = new Vec2(-40, - 20);
    this._textLabel = new Text('button');
    this.addChild(this._textLabel);
 
  }
  onLoad() {
    this.currentScale = new Vec2(this.scale.x, this.scale.y)
    // this.maxScale = this.currentScale.add(new Vec2(0.1, 0.1));
    // this.minScale = this.currentScale;

    this.scaleCount = 0
  }
  touchStart() {
    this.isScaleAction = true
    this.isTouched = true
  }
  touchEnd() {
    // this.currentScale = this.minScale;
    if (this.clickCb && this.isTouched) {
      this.clickCb()
    }
    this.isTouched = false
  }
  buttonUpdate(dt) {
    switch (this.pressStyle) {
      case 'scale':
        if (this.isScaleAction) {
          if (this.scaleCount < Math.PI) {
            this.scaleCount += 0.01 * dt
            this.scale = this.currentScale.add(new Vec2(Math.sin(this.scaleCount) * 0.1, Math.sin(this.scaleCount) * 0.1))
          } else {
            this.scaleCount = 0
            this.isScaleAction = false
          }
        }
        break
      default:
        break
    }
  }
}
export default Button
