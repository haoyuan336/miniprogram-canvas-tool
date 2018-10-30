import Sprite from './sprite'
class Animate extends Sprite {
  constructor (params) {
    super(params[0])
    super.registerUpdate(this.animateUpdate.bind(this)) // 注册父类的update 函数
    console.log('创建动画')
    this.time = 0

    this._currentIndex = 0
    this._resList = params
    this._currentTime = 0
    this._playTime = 0
    this._speed = 1000 / 25 // 默认值是一秒钟25帧
    this._playCb = undefined
    this.children = []
  }
  animateUpdate (dt) {
    if (this._playTime !== 0) {
      this._currentTime += dt
      if (this._currentTime > this._speed) {
        this._currentTime = 0
        super.changeRes(this._resList[this._currentIndex])
        this._currentIndex++
        if (this._currentIndex >= this._resList.length) {
          this._currentIndex = 0
          this._playTime--
        }
      }
      if (this._playTime === 0) {
        console.log('一遍完成')
      }
    }
  }
  play (speed, time, cb) {
    this._playTime = time
    this._speed = speed
    this._currentIndex++
    this._playCb = cb
  }
}
export default Animate
