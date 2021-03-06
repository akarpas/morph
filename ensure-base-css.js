const fs = require('mz/fs')

const CSS = `* {
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
html,
body,
#root {
  height: 100%;
  margin: 0;
}
.views-block,
#root {
  align-items: stretch;
  background-color: transparent;
  border-radius: 0;
  border: 0;
  box-sizing: border-box;
  color: inherit;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  hyphens: auto;
  margin: 0;
  margin: 0;
  overflow-wrap: break-word;
  padding: 0;
  padding: 0;
  position: relative;
  text-align: left;
  text-decoration: none;
  word-wrap: break-word;
}
.views-text {
  box-sizing: border-box;
  hyphens: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
}
.views-capture {
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 0;
  border: 0;
  hyphens: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
}
.views-capture::-moz-focus-inner {
  border: 0;
  margin: 0;
  padding: 0;
}
/* remove number arrows */
.views-capture[type='number']::-webkit-outer-spin-button,
.views-capture[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`

const BASE_CSS = `import { injectGlobal } from 'emotion'
injectGlobal(\`${CSS}\`)`

module.exports = async file => {
  await fs.writeFile(file, BASE_CSS, { encoding: 'utf8' })
}
