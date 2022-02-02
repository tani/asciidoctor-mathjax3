require 'asciidoctor'
require 'asciidoctor/extensions'
require 'asciidoctor/mathjax3/postprocessor'
require 'asciidoctor/mathjax3/version'

Asciidoctor::Extensions.register do
  if (@document.basebackend? 'html')
    postprocessor Asciidoctor::MathJax3::Postprocessor
  end
end
