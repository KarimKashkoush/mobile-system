import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { auth } from '../../auth/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function SignIn() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const userCredential = await signInWithEmailAndPassword(auth, email, password);
                  const user = userCredential.user;

                  // تخزين بيانات المستخدم في localStorage
                  localStorage.setItem('user', JSON.stringify(user));

                  Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Signed in successfully!',
                        showConfirmButton: false,
                        timer: 1500,
                  });

                  navigate('/dashboard');
            } catch (error) {
                  setError(error.message);
            }
      };

      return (
            <section className='form signin'>
                  <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // تحديث قيمة البريد الإلكتروني
                                    required
                              />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // تحديث قيمة كلمة المرور
                                    required
                              />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                              Sign In
                        </Button>

                        {error && <p className="text-danger">{error}</p>}

                        <p className="mt-3">
                              Already have an account? <Link to="/signup">Sign up</Link>
                        </p>
                  </Form>
            </section>
      );
}
