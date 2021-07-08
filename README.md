# Asciidoctor MathJax3

This project provides an Asciidoctor plugin for converting block and inline STEM in TeX notation (latexmath) to HTML using MathJax3 library.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'asciidoctor-mathjax3'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install asciidoctor-mathjax3

## Usage

If you invoke Asciidoctor from command-line, use option `-r` to load the extension:

```
asciidoctor -r asciidoctor-mathjax3 <filename>.adoc
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/tani/asciidoctor-mathjax3.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
