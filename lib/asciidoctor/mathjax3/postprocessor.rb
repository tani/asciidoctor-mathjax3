require 'asciidoctor' unless RUBY_PLATFORM == 'opal'
require 'asciidoctor/extensions' unless RUBY_PLATFORM == 'opal'

module Asciidoctor::MathJax3
  class Postprocessor < Asciidoctor::Extensions::Postprocessor
    def process document, output
      cfg = %r{<script type="text/x-mathjax-config">.*?</script>}m
      m2 = %r{<script src=".*?TeX-MML-AM_HTMLorMML"></script>}
      m3 = %(<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>)
      output.sub(cfg, '').sub(m2, m3)
    end
  end
end
