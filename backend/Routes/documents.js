import express from 'express'
import { error } from '../utils/logger.js'
const router = express.Router()

let data = ["oranges", "apples", "pears", "kiwis", "pineapples"]

const getDocuments = async (req,res) =>{
    try{
        res.status(200).send(data)
    }catch(e){
        res.status(500).send(e)
        error(e)
    }
}

// /api/documents
router.get("/documents", getDocuments)

export default router