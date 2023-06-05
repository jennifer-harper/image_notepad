import express from 'express'
import * as db from '../db/uploadImgsDB'
import { JwtRequest} from '../auth0'
import checkJwt from '../auth0'

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

//********************** */
// router.post('/', checkJwt, async (req: JwtRequest, res) => {
//     try {
//       const { title, description, category, link, image } = req.body;
//       const auth0Id = req.auth?.sub;
  
//       if (!auth0Id) {
//         console.error('No auth0Id');
//         return res.status(401).send('Unauthorized');
//       }
  
//       const newNote: UserData = {
//         title,
//         description,
//         link,
//         image,
//         category,
//         added_by_user: auth0Id,
//       };
  
//       const data = await db.createNewNoteDB(newNote);
//       res.json(data);
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
//   });

//******************* create new

router.post('/', checkJwt, async (req: JwtRequest, res) => {
    try{
        const auth0Id = req.auth?.sub
        const {category, notes, image} = req.body

        if (!auth0Id) {
            console.error('No auth0Id')
            return res.status(401).send('Unauthorized')
        }

        const newImg = {category, notes, image, user_id: auth0Id}

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