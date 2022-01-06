import { Router } from 'express';
import knex from '../database/connection'

const locationsRoutes = Router();

locationsRoutes.post("/", async (request, response) => {
    const {
        name,
        email,
        whatsaap,
        latitude,
        longitude,
        city,
        uf,
        items
    } = await request.body;

    const location = {
        image: "fake-image.jpg",
        name,
        email,
        whatsaap,
        latitude,
        longitude,
        city,
        uf,
        items,
    } 
    
    return response.json([])
    });

export default locationsRoutes;