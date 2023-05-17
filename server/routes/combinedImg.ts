//routes
import express from 'express'
import * as db from '../db/combinedDB'
// import * as Img from '../../models/character'
const router = express.Router()


router.get('/', async (req, res) => {
    try{
        const data = await db.getAllCategories()
        res.json(data)
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})



export default router