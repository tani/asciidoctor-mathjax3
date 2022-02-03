/*************************************************************************
 *  Original: https://github.com/mathjax/MathJax-demos-node
 *  This code is modified version of original code.
 *  We updated to call the procedure as an Asciidoctor plugin.
 *
 *  Copyright (c) 2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
const { AssistiveMmlHandler } = require('mathjax-full/js/a11y/assistive-mml.js');
const { AllPackages } = require('mathjax-full/js/input/tex/AllPackages.js');
const juice = require('juice/client')
require('mathjax-full/js/util/entities/all.js')

const AsciidoctorMathJax = {}

function register(registry) {
  registry.postprocessor(function() {
    this.process((document, originalOutput) => {
      const cfg = new RegExp('<script type="text/x-mathjax-config">[\\s\\S]*?</script>', 'm')
      const src = new RegExp('<script src=".*?TeX-MML-AM_HTMLorMML"></script>', 'm')
      const output = originalOutput.replace(cfg, '').replace(src, '')
      const adaptor = liteAdaptor()
      AssistiveMmlHandler(RegisterHTMLHandler(adaptor))
      const tex = new TeX({ packages: AllPackages })
      const svg = new SVG({ fontCache: false })
      const html = mathjax.document(output, { InputJax: tex, OutputJax: svg })
      html.render()
      if (Array.from(html.math).length === 0) {
        adaptor.remove(html.outputJax.svgStyles);
        const cache = adaptor.elementById(adaptor.body(html.document), 'MJX-SVG-global-cache');
        if (cache) adaptor.remove(cache);
      }
      const result = juice(adaptor.outerHTML(adaptor.root(html.document)))
      if (document.getOptions().standalone) {
        return adaptor.doctype(html.document) + result
      }
      return adaptor.innerHTML(mathjax.document(result).document.body)
    })
  })
}

AsciidoctorMathJax.register = register
AsciidoctorMathJax.default = AsciidoctorMathJax
module.exports = AsciidoctorMathJax
