import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js'
import adminRouter from './routes/adminRoutes.js'
import blogRouter from './routes/blogRoutes.js'

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send("API is Working"))
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

const PORT = process.env.PORT || 3000

const startServer = async () => {
  await connectDB()

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

startServer()

export default app
