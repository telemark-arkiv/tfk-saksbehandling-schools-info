'use strict'

const schools = require('./lib/data/schools.json')

module.exports = orgId => {
  if (!orgId) {
    throw new Error('Missing required input: organizationId')
  }
  var school = schools[orgId.toString()]

  if (!school) {
    throw new Error('School not found')
  } else {
    return school
  }
}
