import estrellaData from '../data/estrellas.json'
import { Request, Response, Router } from "express";


export async function getEstrellaController( req:Request, res:Response) {
    const type = req.query.type as string
    let estrellas = estrellaData
    if (type) {
        estrellas = estrellaData.filter((estrella) => estrella.type.includes(type))
    }
    res.status(200).json(estrellas)
}