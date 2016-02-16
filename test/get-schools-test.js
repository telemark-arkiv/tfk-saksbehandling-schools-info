'use strict'

var tap = require('tap')
var getSchoolInfo = require('../index')
var schools = require('../lib/data/schools.json')
var expected = schools['974568012']

tap.throws(
  function () {
    getSchoolInfo()
  },
  {message: 'Missing required input: organizationId'},
  'Throws if organizationId not supplied'
)

tap.throws(
  function () {
    getSchoolInfo(1234)
  },
  {message: 'School not found'},
  'Throws if school not found'
)

tap.equal(JSON.stringify(expected), JSON.stringify(getSchoolInfo(974568012)), 'It returns expected result')
