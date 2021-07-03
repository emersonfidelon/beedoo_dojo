import express from 'express'

import cashOutRoute from './routes/CashOut'


const app = express()

 app.use(cashOutRoute)

 app.listen(3000,()=>{
   console.log('My application is running')
 })

export { app }