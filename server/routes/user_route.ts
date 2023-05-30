import express from 'express'
import * as db from '../db/userDB'
const bcrypt = require("bcryptjs");

const router = express.Router()


router.get('/', async (req, res) => {
    try{
        const data = await db.getAllUserDB()
        res.json(data)
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})

 router.post('/signup', async  (req, res) => {

    const password = req.body.password
    const saltRounds = 10
    try{   
        const encryptedPassword = await bcrypt.hash(password, saltRounds);
  
        const user = {
          email: req.body.email,
          password: encryptedPassword,
          username: req.body.username
        }        

        const data = await db.createUserDB(user)
        res.json(data[0])

    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})


router.post('/login', async (req, res) => {
    try{
        const data = req.body
        const user = await db.getUserDB(data)

    if (!user) {
      // User not found
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password);

    if (!passwordMatch) {
      // Incorrect password
      return res.status(401).json({ msg: 'Invalid password' });
    }

    res.json(user)
        
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})


router.delete('/:id', async (req, res) => {
    try{
        await db.delUserDB(+req.params.id)
        res.sendStatus(200)
    } catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})

export default router