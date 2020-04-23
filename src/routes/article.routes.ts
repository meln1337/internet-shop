import { Router, Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../database'
import articles from '../articles.json'
const router = Router()

router.get('/articles', async (req: Request, res: Response) => {
    const response: QueryResult = await pool.query('SELECT * FROM articles')
    console.log(response.rows)
    res.json(articles)
})

router.get('/articles/:id', (req: Request, res: Response) => {
    const article = articles.find(article => article.id === req.params.id)
    res.json(article)
})

export default router