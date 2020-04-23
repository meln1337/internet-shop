import express from 'express'
import dotenv from 'dotenv'
import articleRoutes from './routes/article.routes'

const app: express.Application = express()

dotenv.config()

app.use('/api', articleRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App has been started on port ${PORT}`)
})