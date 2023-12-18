const express = require('express')
const router = express.Router()
const subscriber = require('./patient')

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
  const subscriber = new subscriber({
    name: req.body.name,
    subscriberToChannel: req.body.subscriberToChannel
  })

  try {
    const newsubscriber = await Subscriber.save()
    res.status(201).json(newsubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })

  }
  
})

// Updating One
router.patch('/:id', getSubscriber, async (req, res) => {
  if (req.body.subscriberToChannel != null) {
    res.subscriber.subscriberToChannel = req.body.subscriberToChannel
    
  }

  try {
    const updatedSubscriber = await res.subscriber.save()
    res.json(updatedSubscriber)
  } catch (err) {
    res.status(400).json({message: err.message })
  }
  
})

// Deleting One
router.delete('/:id', getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove()
    res.json({ message: 'Deleted Subscriber '})
  } catch (err) {
    res.status(500).json({ message: err.message })

  }
  
})

async function getSubscriber(req, res, next) {
  let subscriber
  try {
    subscriber = await Subscriber.findByID(req.params.id)
    if (subscriber == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message})
    
  }

  res.subscriber = subscribers
  next()

}




module.exports = router