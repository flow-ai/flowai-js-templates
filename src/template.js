
class Template {
  constructor() {
  }

  addQuickReply(quickReply) {
    if(!this.quickReplies) {
      this.quickReplies = []
    }
    this.quickReplies.push(quickReply)
  }
}

export default Template
