import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'



const prisma = new PrismaClient()

const app = express()

app.use(express.json())

app.use(cors())

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

    
    response.status(201).json(users)
})


app.put('/usuarios/:id', async (request, response) => {

    
    const users = await prisma.user.update({
       where: {
            id: request.params.id
       }, 
        data:{
            email: request.body.email,
            age: request.body.age,
            name: request.body.name
        }
   })

   
   response.status(200).json(users)
})


app.delete('/usuarios/:id', async (request, response) => {
    await prisma.user.delete({
        where:{
            id: request.params.id
        }
    })

    response.status(200).json({ message: "Usuário deletado com sucesso!"})
})

app.listen(3000)