import express, { Request, Response } from 'express'
import passport from 'passport'
import sequelize from './models'

const app = express()

const PassportCofig = require('./utils/passport')

PassportCofig()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(passport.initialize())

app.use('/api', require('./api'))

const port: number = 3000
app.listen(port, async () => {
  console.log(`SERVER ON! PORT : ${port}`)
  await sequelize
    .authenticate()
    .then(async () => {
      console.log('connection success')
    })
    .catch((e) => {
      console.log(e)
    })
})