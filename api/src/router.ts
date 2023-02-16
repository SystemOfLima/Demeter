import { Router } from 'express';

import {
  All,
  Complete,
  Create,
  Delete,
  FindCompleted,
  Update,
} from './controller/task';

export const routerV1 = Router();

routerV1.get('/', All);
routerV1.get('/completed', FindCompleted);
routerV1.get('/:id/complete', Complete);
routerV1.post('/', Create);
routerV1.patch('/:id', Update);
routerV1.delete('/:id', Delete);
