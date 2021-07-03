import express from 'express'
import morgan from 'morgan'
import cashOutRoute from './routes/CashOut'

const app = express()


app.use(cashOutRoute)

export { app }