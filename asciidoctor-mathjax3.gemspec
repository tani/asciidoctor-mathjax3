require_relative 'lib/asciidoctor/mathjax3/version'

Gem::Specification.new do |spec|
  spec.name          = "asciidoctor-mathjax3"
  spec.version       = Asciidoctor::MathJax3::VERSION
  spec.authors       = ["TANIGUCHI Masaya"]
  spec.email         = ["ta2gch@gmail.com"]

  spec.summary       = %q{Asciidoctor Plugin that converts latexmath using Mathjax 3}
  spec.homepage      = "https://github.com/tani/asciidoctor-mathjax3"
  spec.license       = "MIT"
  spec.required_ruby_version = Gem::Requirement.new(">= 2.3.0")

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["changelog_uri"] = spec.homepage

  spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "asciidoctor", ">= 1.5.7", "< 2.0.0"
end
