
class Media {
  constructor(url) {
    if(typeof url !== 'string' || url.length === 0) {
      throw new Error(`url is mandatory ${url}`)
    }
    this.url = url
  }
}

export default Media
