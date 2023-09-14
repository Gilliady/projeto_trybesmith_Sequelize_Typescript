import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Product } from '../../../src/types/Product';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(function () { sinon.restore(); });
  it('should return 201 when product is created', async function () {
    const product: Product = { name: 'Product 1', price: '10 moedas de bronze', orderId: 1 };
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build({...product, id: 1 }));
    const response = await chai.request(app).post('/products').send(product);
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id', 1);
    expect(response.body).to.have.property('name', product.name);
    expect(response.body).to.have.property('price', product.price);
  });
});
