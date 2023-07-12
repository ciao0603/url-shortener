const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema ({
  hostname: {
    type: String,
    required: true
  },
  shortname: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('URL', urlSchema)