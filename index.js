import express from 'express'
import { dbConnections } from './databases/dbConnection.js'
import userRouter from './src/modules/user/user.routes.js'
const app = express()
const port = 3000
app.use(express.json())
app.use(userRouter)

dbConnections()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))