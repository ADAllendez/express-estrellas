import express from 'express'
import estrellaRouter from './routes/estrellas.router'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/estrellas',estrellaRouter )

app.listen(PORT,() =>{
    console.log('Servidor express iniciado correctamente')
})