interface KLOptions {
  customCSS?: string
}
interface IkeyLight {
  color: string
  options?: KLOptions
  match (content: string, key: string, filter: fn ): string
}
type fn = (content: string) => string
class KeyLight implements IkeyLight {
  color: string;
  options: KLOptions

  constructor(color: string, options: KLOptions = {}) {
    this.color = color || '#000'
    this.options = options
  }

  match(content: string, key: string, filter: fn = (val) => val): string {
    const arr = content.split(key)
    const len = arr.length
    if (len < 2) {
      return content
    }
    const customCSS = this.options.customCSS
    for (let i = 1; i < len; ++i) {
      arr[i] = `<span ${customCSS ? `class="${customCSS}"` : ''} style="color:${this.color}">${filter(key)}</span>${arr[i]}`
    }
    return arr.join('')
  }
}

export default KeyLight
