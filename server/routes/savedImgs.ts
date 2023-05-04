import express from 'express'
import * as db from '../db/searchImgDB'
// import * as Img from '../../models/character'
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


  //*******************Delete existing
  router.delete('/:id', (req,res) =>{
    db.delImgDB (+req.params.id)
    .then(() => {
      res.sendStatus(200) 
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })  
  })

  //*******************Create existing


  router.post('/', (req, res) => {
   db.createImgDB(req.body)
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.status(500).send(err.message)
      })
  })


export default router