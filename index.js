'use strict'

var schools = require('./lib/data/schools.json')

function getSchool (orgId) {
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

module.exports = getSchool
