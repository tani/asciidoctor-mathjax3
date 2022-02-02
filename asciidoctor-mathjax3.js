function AsciidoctorMathJax(registry) {
  registry.postprocessor(function() {
    this.process(function(_document, output) {
      cfg = new RegExp('<script type="text/x-mathjax-config">.*?</script>', 'm')
      m2 = new RegExp('<script src=".*?TeX-MML-AM_HTMLorMML"></script>', 'm')
      m3 = '<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>'
      return output.replace(cfg, '').replace(m2, m3)
    })
  })
}

AsciidoctorMathJax.default = AsciidoctorMathJax
module.exports = AsciidoctorMathJax
