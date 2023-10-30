import express from 'express';
import { Application, Router } from 'express';
import { adaptExpressRoute } from '../adapter';
import { makeCreateTaskController, makeRemoveTaskController, makeUpdateTaskController, makeListTasksController } from '../factories';

export default (prefix: string, router: Router, app: Application): void => {
  app.use(express.json());
  app.use(router);

  // router.get(`/${prefix}`, (req, res) => { res.send('oi') });
  router.get(`${prefix}`, (adaptExpressRoute(makeListTasksController())))
  router.delete(`${prefix}/:id`, (adaptExpressRoute(makeRemoveTaskController())))
  router.post(`${prefix}`, (adaptExpressRoute(makeCreateTaskController())))
  router.put(`${prefix}/:id`, (adaptExpressRoute(makeUpdateTaskController())))
}
