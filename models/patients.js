const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  PatientID: {
    type: String,
    required: true
  },

  Surname: {
    type: String,
    required: true
  },

  Othernames: {
    type: String,
    required: true
  },

  residentalAddress: {
    type: String,
    required: true
  },

  Emergency: {
    type: String,
    required: true
  },

  Contact: {
    type: String,
    required: true
  },


  phoneNumber: {
    type: String,
    required: true,
    
  }
})




modules.exports = mongoose.model('patient', patientSchema)