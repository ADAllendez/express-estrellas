import { Request,Response } from 'express'

export async function createEstrella (req:Request, res:Response) {
    const {id, name, type, distancia, mass, radius, temperature , luminosity, age}=req.body
    if(!id|| !name || !type || !distancia || !mass || !radius || !temperature || !luminosity || !age){
        res.status(400).json({
            error:'BAD_REQUEST',
            message: "There are missing params frio this request"
        })
    }
    res.status(200).json({
        status: 'OK'
    })
}