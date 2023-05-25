import express from 'express'
import * as db from '../db/uploadImgsDB'

const router = express.Router()


router.get('/', async (req, res) => {
    try{
        const data = await db.getUploadsDB()
        res.json(data)
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})

//*******************Delete existing

router.delete('/:id', async (req, res) => {
    try{
        await db.delUploadsDB(+req.params.id)
        res.sendStatus(200)
    } catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})


//******************* create new

router.post('/', async  (req, res) => {
    try{
        const newImg = req.body
        const imgArr = await db.createUploadDB(newImg)
        res.json(imgArr[0])
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})

//******************* existing existing

router.get('/:id', async (req, res) => {
    try{
        const data = await db.getIdUploadDB(+req.params.id)
        res.json(data)
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})

router.patch('/:id', async (req, res) => {        
    try{
        const data = await db.editUploadDB(+req.params.id, req.body)
        res.json(data)
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})




export default router