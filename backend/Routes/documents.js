import express from 'express'
import { error } from '../utils/logger.js'
const router = express.Router()

let data = {
    "usuario": ["oranges", "apples", "pears", "kiwis", "pineapples"],
    "usuario2": ["car","motorbike","truck","van"]
}

const getDocuments = async (req,res) =>{
    try{
        const username = req.user
        res.status(200).send(data[username])
    }catch(e){
        res.status(500).send(e)
        error(e)
    }
}

// /api/documents
router.get("/documents", getDocuments)

export default router