import { Router, Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../database'
const router = Router()

router.get('/articles', async (req: Request, res: Response) => {
    const articles: QueryResult = await pool.query('SELECT * FROM articles')
    res.json(articles.rows)
})

router.get('/articles/:id', async (req: Request, res: Response) => {
    const article: QueryResult = await pool.query(`SELECT * FROM articles WHERE id = ${req.params.id}`)
    if (!article.rows[0]) {
        return res.status(404).json('We didn\'t find the article')
    }
    res.json(article.rows[0])
})

router.get('/category/:category', async (req: Request, res: Response) => {
    const article: QueryResult = await pool.query(`SELECT * FROM articles WHERE '${req.params.category}' = ANY (categories)`)
    res.json({ 
        articles: article.rows,
        category: req.params.category 
    })
})

export default router