import Product from '../model/product';
import { Controller } from 'egg';

const productModel = new Product();

class ProductController extends Controller {
  list () {
    this.ctx.body = productModel.list();
  }

  add () {
    console.log('add', this.ctx.request);
    const { product } = this.ctx.request.body;
    productModel.add(product);
  }

  getProductById () {
    const { id } = this.ctx.request.query;
    this.ctx.body = productModel.getProductById(id);
  }
}
export default ProductController;
