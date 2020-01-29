import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/product/list', controller.product.list);
  router.post('/product/add', controller.product.add);
  router.get('/product/getProductById', controller.product.getProductById);
};
