import express from 'express'
import * as db from '../db/searchImgDB'
const router = express.Router()


router.get('/', (req, res) => {
db.getAllImgsDB()
    .then((data) => {
    res.json(data)
    })
    .catch((err: Error) => {
    res.status(500).send(err.message)
    })
})


export default router