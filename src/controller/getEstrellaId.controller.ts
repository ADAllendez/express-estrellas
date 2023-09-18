import { Request, Response } from 'express';
import estrellaData from '../data/estrellas.json';

export async function getEstrellaId(req: Request, res: Response) {
    const id = req.params.id;

    const estrella = estrellaData.find((estrella) => estrella.id.toString() === id);
    if (!estrella) {
        res.status(404).json({
            error: 'ESTRELLA_NOT_FOUND',
            message: `Estrella ${id} not found in the database`
        });
        return;
    }

    res.status(200).json(estrella);
}
