class TextScanner {
  constructor(text) {
    this.text = text
    this.pos = 0
    this.lastPos = 0
    this.lastMatch = null
  }

  check(...options) {
    let text = this.unscannedText()

    let match = options.find(option => text.startsWith(option))

    if (match === undefined) { match = null }

    return match
  }

  scan(...options) {
    let match = this.check(...options)

    if (match !== null) {
      this.lastMatch = match
      this.movePointer(match.length)
    }

    return match
  }

  eos() { return this.pos >= this.text.length }

  movePointer(n) {
    this.lastPos = this.pos

    this.pos += n

    if (this.pos < 0) { this.pos = 0 }
    else if (this.pos > this.text.length) { this.pos = this.text.length }
  }

  peek(n) {
    if (n <= 0) { return '' }
    return this.text.slice(this.pos, this.pos + n)
  }

  scannedText() { return this.text.substring(0, this.pos) }
  unscannedText() { return this.text.substring(this.pos) }
}

module.exports = TextScanner