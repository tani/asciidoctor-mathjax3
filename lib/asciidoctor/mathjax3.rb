require 'asciidoctor' unless RUBY_PLATFORM == 'opal'
require 'asciidoctor/extensions' unless RUBY_PLATFORM == 'opal'
require 'asciidoctor/mathjax3/postprocessor'
require 'asciidoctor/mathjax3/version'

unless RUBY_PLATFORM == 'opal'
  Asciidoctor::Extensions.register do
    if (@document.basebackend? 'html')
      postprocessor Asciidoctor::MathJax3::Postprocessor
    end
  end
end
