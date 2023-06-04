const { withAxiom } = require('next-axiom')
const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate(withAxiom({
  // ... your existing config
  reactStrictMode: false,
 
}))
