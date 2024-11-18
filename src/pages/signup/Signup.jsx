import './signup.css';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { auth, createUserWithEmailAndPassword, updateProfile } from '../../auth/firebase'; //    
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Signup() {
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [error, setError] = useState('');
      const [validated, setValidated] = useState(false);

      const handleSubmit = async (e) => {
            e.preventDefault();

            const form = e.currentTarget;
            if (form.checkValidity() === false || password !== confirmPassword) {
                  e.stopPropagation();
                  setValidated(true);
                  return;
            }

            try {
                  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                  const user = userCredential.user;

                  await updateProfile(user, { displayName: username });

                  Swal.fire({
                        position: "center-center",
                        icon: "success",
                        title: "User created successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                  });

                  setUsername('');
                  setEmail('');
                  setPassword('');
                  setConfirmPassword('');
                  setError('');
                  setValidated(false);
            } catch (error) {
                  setError(error.message);
            }
      };

      return (
            <section className='form signup'>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="validationCustom01">
                              <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                              />
                              <Form.Control.Feedback type="invalid">
                                    Please provide your name.
                              </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom02">
                              <Form.Control
                                    required
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                              />
                              <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                              </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom03">
                              <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    minLength="6"
                              />
                              <Form.Control.Feedback type="invalid">
                                    Password must be at least 6 characters.
                              </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="validationCustom04">
                              <Form.Control
                                    required
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                              />
                              <Form.Control.Feedback type="invalid">
                                    Passwords must match.
                              </Form.Control.Feedback>
                              {password !== confirmPassword && <p className="text-danger mt-1">Passwords do not match.</p>}
                        </Form.Group>

                        <Button variant="primary" type="submit">
                              Submit
                        </Button>

                        {error && (
                              <p className="text-danger mt-3">
                                    {error === 'Firebase: Error (auth/email-already-in-use).' ? 'Email already in use' : 'An error occurred'}
                              </p>
                        )}

                        <p className="mt-3">
                              Already have an account? <Link to="/signin">Sign in</Link>
                        </p>
                  </Form>
            </section>
      );
}
