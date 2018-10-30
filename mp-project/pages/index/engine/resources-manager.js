class ResourcesManager {
  constructor() {
    this.resources = {}
  }

  load(key, cb, str) {
    let url = '';
    if (str){
      url = str;
    }
    if (this.resources.hasOwnProperty(key)) {
      if (cb) {
        cb(key)
      }
      return
    }

    wx.getImageInfo({
      src: url + key,
      success: (res) => {
        this.resources[key] = res
        if (cb) {
          cb(key, res)
        }
      }
    })
  }
  loadList(resList, cb) {
    let loadCount = 0
    const loadCb = function () {
      loadCount++
      if (loadCount === resList.length) {
        if (cb) {
          cb()
        }
      }
    }
    for (let i = 0; i < resList.length; i++) {
      this.load(resList[i], loadCb)
    }
  }
  loadUrlList(url, resList, cb) {
    let loadCount = 0
    const loadCb = function () {
      loadCount++
      if (loadCount === resList.length) {
        if (cb) {
          cb()
        }
      }
    }
    for (let i = 0; i < resList.length; i++) {
      this.load(resList[i], loadCb, url)
    }
  }
  loadMap(url, map, cb) {
    let loadCount = 0
    let keyLength = Object.keys(map).length
    const loadCb = (key, res) => {
      loadCount++
      if (loadCount === keyLength) {
        if (cb) {
          cb()
        }
      }
    }
    for (let i in map) {
      this.load(map[i], loadCb, url)
    }
  }
}
export default new ResourcesManager()
