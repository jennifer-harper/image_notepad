//routes
import express from 'express'
import * as db from '../db/searchImgDB'
// import * as Img from '../../models/character'
const router = express.Router()


// router.get('/', async (req, res) => {
//     try{
//         const data = await db.getAllImgsDB()
//         res.json(data)
//     }catch (e) {
//         res.status(500).json({ msg: (e as Error).message })
//     }
// })

//*******************Delete existing

router.delete('/:id', async (req, res) => {
    try{
        await db.delImgDB(+req.params.id)
        res.sendStatus(200)
    } catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})


//*******************Create existing
router.post('/', async  (req, res) => {
    try{
        const newImg = req.body
        const imgArr = await db.createImgDB(newImg)
        res.json(imgArr[0])
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})

router.get('/', async (req, res) => {
    try{
        const data = await db.getAllCategories()
        res.json(data)
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})



export default router