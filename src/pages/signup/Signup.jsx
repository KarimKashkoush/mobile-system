import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { auth, createUserWithEmailAndPassword } from '../../auth/firebase';  // تعديل الاستيراد
import { Link } from 'react-router-dom';
export default function Signup() {
      const [username, setUsername] = useState('');  
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  await createUserWithEmailAndPassword(auth, email, password, username);
                  console.log('User created successfully!');
            } catch (error) {
                  setError(error.message);
            }
      };

      return (
            <div>
                  {error && <p className="text-danger">{error}</p>}
                  <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Name</Form.Label>
                              <Form.Control
                                    type="text"
                                    placeholder="Enter email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                              />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                              />
                              <Form.Text className="text-muted">
                                    We&apos;ll never share your email with anyone else.
                              </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                              />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                              Submit
                        </Button>

                        <Link to='/signin'>signin</Link>
                  </Form>
            </div>
      );
}
