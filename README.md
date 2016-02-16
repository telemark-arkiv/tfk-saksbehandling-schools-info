[![Build Status](https://travis-ci.org/telemark/tfk-saksbehandling-schools-info.svg?branch=master)](https://travis-ci.org/telemark/tfk-saksbehandling-schools-info)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-saksbehandling-schools-info/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-saksbehandling-schools-info?branch=master)
[![Code Climate](https://codeclimate.com/github/telemark/tfk-saksbehandling-schools-info/badges/gpa.svg)](https://codeclimate.com/github/telemark/tfk-saksbehandling-schools-info)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-saksbehandling-schools-info
Get school info

## Installation

From npm

```sh
$ npm install tfk-saksbehandling-schools-info
```

From GitHub

```sh
$ git clone git@github.com:telemark/tfk-saksbehandling-schools-info.git
```

cd into directory and run setup

```sh
$ npm run setup
```

## Usage

```javascript
'use strict'

var getSchoolInfo = require('tfk-saksbehandling-schools-info')
var organizationId = '974568012'

console.log(getSchoolInfo(organizationId))
```

returns

```javascript
{ 
  name: 'Notodden videregående skole',
  accessGroup: 'Elev-Notodden',
  phoneNumber: '' 
}
```

## License
[MIT](LICENSE)