import express from 'express'
import estrellaRouter from './routes/estrellas.router'
import { logger } from './middleware/logger.middleware'
import { errorHandler } from './middleware/errorHandler'

const app = express()
const PORT = 3000

app.use(express.json())

app.use ('*', logger)// aca el asterisco indica que para todas la rutas ejecute el logger
app.use('*', errorHandler)

app.use('/estrellas',estrellaRouter )

app.listen(PORT,() =>{
    console.log(`Servidor express iniciado correctamente puerto:${PORT}`)
})