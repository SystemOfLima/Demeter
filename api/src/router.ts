import { Router } from 'express';

import { All, Complete, Create, Delete, Update } from './controller/task';

export const routerV1 = Router();

routerV1.get('/', All);
routerV1.post('/', Create);
routerV1.patch('/:id', Update);
routerV1.delete('/:id', Delete);
routerV1.get('/:id/complete', Complete);
