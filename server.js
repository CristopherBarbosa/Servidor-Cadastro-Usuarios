import express, { request, response } from 'express'

const app = express()

app.use(express.json())

app.get('/usuarios/:id', (request, response) =>{
    response.send("Olá, rota acessada com sucesso")
} )

app.post('/usuarios', (request, response) => {
    response.send("Olá")
})

app.listen(3000)