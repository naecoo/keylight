# To highlight some key content with color
### demo
- demo1
![demo1](/img/demo1.gif)
- demo2 
![demo2](/img/demo2.gif)

### usage
```javascript
// install
yarn add keylight

// import 
import keylight from 'keylight'

// use
const kl = new keylight('#f701bc')
const content = "hello world"
const key = "hello"
const hightContent = kl.match(content, key)
// => '<span style="color:#f701bc;">hello</span> world'

// change color
kl.color = '#ababab'
const hightContent = kl.match(content, key)
// => '<span style="color:#ababab;">hello</span> world'

// additional operating
const upperCase = val => val.toUpperCase()
const hightContent = kl.match(content, key, uppercase) 
// => '<span style="color:#ababab;">HELLO</span> world'

```