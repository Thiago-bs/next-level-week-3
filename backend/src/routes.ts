import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController'
import multer from 'multer';
import uploadConfig from './config/upload'

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create)

routes.get('/orphanages', async (request, response) => {
    OrphanagesController.index(request, response);
})

routes.get('/orphanages/:id', async (request, response) => {
    OrphanagesController.show(request, response);
})
export default routes;