import { Router, Request, Response } from 'express'
import articles from '../articles.json'
const router = Router()

router.get('/articles', (req: Request, res: Response) => {
    res.json(articles)
})

router.get('/articles/:id', (req: Request, res: Response) => {
    const article = articles.find(article => article.id === req.params.id)
    res.json(article)
})

export default router