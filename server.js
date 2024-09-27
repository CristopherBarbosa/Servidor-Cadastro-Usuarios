import express from 'express'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

const app = express()

app.use(express.json())

app.get('/usuarios/:id', async (request, response) =>{
    const users = await prisma.user.findMany()

    response.status(200).json(users)
} )

app.post('/usuarios', async (request, response) => {
     const users = await prisma.user.create({
        data:{
            email: request.body.email,
            age: request.body.age,
            name: request.body.name
        }
    })

    response.status(201).json({message: "Usuário criado com sucesso"})
})

app.listen(3000)