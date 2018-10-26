'use strict'
const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const configuration = require('@feathersjs/configuration')

const services = require('./services');

// Create an app that is a Feathers AND Express application
const app = express(feathers())
app.configure(configuration())
app.configure(express.rest())
app.configure(services)

module.exports = app;
