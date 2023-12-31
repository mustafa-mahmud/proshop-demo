import { Row, Col } from 'react-bootstrap';
import products from '../products.js';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((pro, index) => {
          return (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <Product product={pro} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
