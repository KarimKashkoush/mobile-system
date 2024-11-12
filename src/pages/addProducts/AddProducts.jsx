import Header from "../../components/header/Header";
import "./addproducts.css"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function AddProducts() {
      const [validated, setValidated] = useState(false);

      const handleSubmit = (event) => {ىحة
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
            }

            setValidated(true);
      };

      return (
            <section className="add-products">
                  <Header name={'Add Products'} />
                  <section className="form-add-products">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                              <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                          <Form.Label>First name</Form.Label>
                                          <Form.Control
                                                required
                                                type="text"
                                                placeholder="products Name"
                                          />
                                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                          <Form.Label>First name</Form.Label>
                                          <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                          />
                                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                              </Row>
                              <Button type="submit">Submit form</Button>
                        </Form>
                  </section>
            </section>
      )
}
