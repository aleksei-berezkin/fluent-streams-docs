/**
 * To not duplicate the name # Fluent Streams
 */

import fs from 'fs'

const inputReadme = String(fs.readFileSync('../fluent-streams/README.md'))
const tempReadme = inputReadme
    .replaceAll('# Fluent Streams', '')

fs.writeFileSync('temp-readme.md', tempReadme)
