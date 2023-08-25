import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Products Dashboard</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {products &&
          products.map((product) => {
            return (
              <div
                className="col-md-3"
                key={product.id}
                style={{ margin: '10px' }}
              >
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    width={210}
                    height={280}
                  />
                  <Card.Body>
                    <Card.Title>{product.category}</Card.Title>
                    <Card.Text>{product.title}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="primary">Add to cart</Button>
                  </Card.Footer>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}
