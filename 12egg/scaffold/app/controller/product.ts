import Product from '../model/product';
import { Controller } from 'egg';

const productModel = new Product();

class ProductController extends Controller {
  list () {
    this.ctx.body = productModel.list();
  }

  add () {
    const { product } = this.ctx.request.body;
    productModel.add(product);
    this.ctx.body = {
      message: 'ok'
    };
  }

  getProductById () {
    const { id } = this.ctx.request.query;
    this.ctx.body = productModel.getProductById(id);
  }
}

export default ProductController;
