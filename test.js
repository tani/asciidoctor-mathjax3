const asciidoctor = require('@asciidoctor/core')()
const registry = asciidoctor.Extensions.create()
require('./asciidoctor-mathjax3.js').register(registry)
asciidoctor.convertFile('test.adoc', { standalone: true, attributes: { stem: 'latexmath' }, extension_registry: registry })
