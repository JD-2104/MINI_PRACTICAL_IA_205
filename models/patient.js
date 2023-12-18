const express = require('express')
const router = express.Router()
const patient = require('./patient')

// Getting all
router.get('/', async (req, res) => {
  try {
    const patient = await Patient.find()
    res.json(patient)
  } catch (err) {
    res.status(500).json({ message: err.message })

  }
})

// Getting One
router.get('/:id', getPatient, (req, res) => {
  res.json(res.patient)
})

// Creating one
router.post('/', async (req, res) => {
  const patient = new patient({
    name: req.body.name,
    patientToChannel: req.body.patientToChannel
  })

  try {
    const newpatient = await patient.save()
    res.status(201).json(newpatient)
  } catch (err) {
    res.status(400).json({ message: err.message })

  }
  
})

// Updating One
router.patch('/:id', getpatient, async (req, res) => {
  if (req.body.patientToChannel != null) {
    res.patient.patientToChannel = req.body.patientToChannel
    
  }

  try {
    const updatedpatient = await res.patient.save()
    res.json(updatedpatient)
  } catch (err) {
    res.status(400).json({message: err.message })
  }
  
})

// Deleting One
router.delete('/:id', getPatient, async (req, res) => {
  try {
    await res.patient.remove()
    res.json({ message: 'Deleted patient '})
  } catch (err) {
    res.status(500).json({ message: err.message })

  }
  
})

async function getpatient(req, res, next) {
  let patient
  try {
    patient = await patient.findByID(req.params.id)
    if (patient == null) {
      return res.status(404).json({ message: 'Cannot find patient' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message})
    
  }

  res.patient = patients
  next()

}




module.exports = router