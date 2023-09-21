import { NextFunction, Request, Response } from "express";
import Joi, { ValidationError, isError } from 'joi'

export function validatePokemonBody(req:Request, res: Response, next: NextFunction){
    const {body} = req
    const schema = Joi.object({
       id: Joi.number().required(),
       name: Joi.string().required(),
       type: Joi.string().required(),
       distancia: Joi.string().required(),
       mass: Joi.string().required(),
       radius: Joi.string(),
       temperature: Joi.string().required(),
       luminosity: Joi.string(),
       age: Joi.string().required()

        
   })
   const {error, value} = schema.validate(body)
   if(error){
    return res.status(400).json({
       message: error.details[0].message
    })
   }
   next()
}