const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose.connect

app.listen(3000, () => console.log('Server has started'))


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json())

const subscriberRouter = require('./routes/patient')
app.use('/subscriber', subscriberRouter)

 app.listen(3000, () => console.log('Server has started'))