import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { auth } from '../../auth/firebase';  // استيراد auth من ملف firebase
import { signInWithEmailAndPassword } from 'firebase/auth';  // استيراد دالة تسجيل الدخول

export default function SignIn() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  await signInWithEmailAndPassword(auth, email, password);
                  console.log('User signed in successfully!');
                  // يمكنك إضافة إعادة التوجيه بعد تسجيل الدخول الناجح هنا
            } catch (error) {
                  setError(error.message);  // إظهار رسالة الخطأ إذا فشل تسجيل الدخول
            }
      };

      return (
            <div>
                  <h2>Sign In</h2>
                  {error && <p className="text-danger">{error}</p>} {/* عرض رسالة الخطأ */}
                  <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}  // تحديث قيمة البريد الإلكتروني
                              />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}  // تحديث قيمة كلمة المرور
                              />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                              Sign In
                        </Button>
                  </Form>
            </div>
      );
}
