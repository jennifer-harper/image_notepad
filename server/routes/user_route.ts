import express from 'express'
import * as db from '../db/userDB'

const router = express.Router()


router.get('/', async (req, res) => {
    try{
        const data = await db.getAllUserDB()
        res.json(data)
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})

router.post('/login', async (req, res) => {
    try{
        const data = await db.getUserDB(req.body.password, req.body.username)
        res.json(data)
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})


 router.post('/signup', async  (req, res) => {
    try{
        const data = await db.createUserDB(req.body)
        res.json(data[0])
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})

export default router