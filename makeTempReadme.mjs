/**
 * TypeDoc generates links to `hostedBaseUrl` as external. Links to it should be rewritten
 * to make TypeDoc generating them as internal.
 * @see https://github.com/TypeStrong/typedoc/issues/2809
 */

import fs from 'fs'

const inputReadme = String(fs.readFileSync('../fluent-streams/README.md'))
const tempReadme = inputReadme
    .replaceAll('https://aleksei-berezkin.github.io/fluent-streams-docs/', '')
    // .replaceAll('[documentation]()', '[documentation](/)')
    // .replaceAll('[![Read the docs](https://img.shields.io/badge/docs-available-44cc11.svg)]()', '[![Read the docs](https://img.shields.io/badge/docs-available-44cc11.svg)](/)')

fs.writeFileSync('temp-readme.md', tempReadme)
