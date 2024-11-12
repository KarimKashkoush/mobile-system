import Header from "../../components/header/Header";
import "./addproducts.css";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import QrScanner from 'react-qr-scanner'; // استخدام مكتبة react-qr-scanner بدلاً من react-qr-reader

export default function AddProducts() {
      const [validated, setValidated] = useState(false);
      const [inputValue, setInputValue] = useState('');
      const [serialNumber, setSerialNumber] = useState(''); // حالة جديدة للاحتفاظ بالقيمة المقروءة من QR
      const [showQRScanner, setShowQRScanner] = useState(false); // حالة لإظهار أو إخفاء الكاميرا

      // التعامل مع التقديم
      const handleSubmit = (event) => {
            event.preventDefault();
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
            }
            setValidated(true);
      };

      // قائمة الخيارات الأصلية
      const options = [
            { id: 'option1', label: 'iphone 16' },
            { id: 'option2', label: 'iphone 16 mini' },
            { id: 'option3', label: 'iphone 16 pro' },
            { id: 'option4', label: 'iphone 16 plus' },
            { id: 'option5', label: 'iphone 16 pro max' },
            { id: 'option6', label: 'iphone 15' },
            { id: 'option7', label: 'iphone 15 mini' },
            { id: 'option8', label: 'iphone 15 pro' },
            { id: 'option9', label: 'iphone 15 plus' },
            { id: 'option10', label: 'iphone 15 pro max' },
            { id: 'option11', label: 'iphone 14' },
            { id: 'option12', label: 'iphone 14 mini' },
            { id: 'option13', label: 'iphone 14 pro' },
            { id: 'option14', label: 'iphone 14 plus' },
            { id: 'option15', label: 'iphone 14 pro max' },
            { id: 'option16', label: 'iphone 13' },
            { id: 'option17', label: 'iphone 13 mini' },
            { id: 'option18', label: 'iphone 13 pro' },
            { id: 'option19', label: 'iphone 13 pro max' },
            { id: 'option20', label: 'iphone 12' },
            { id: 'option21', label: 'iphone 12 mini' },
            { id: 'option22', label: 'iphone 12 pro' },
            { id: 'option23', label: 'iphone 12 pro max' },
            { id: 'option24', label: 'iphone 11' },
            { id: 'option25', label: 'iphone 11 pro' },
            { id: 'option26', label: 'iphone 11 pro max' },
            { id: 'option27', label: 'iphone x' },
            { id: 'option28', label: 'iphone xs' },
            { id: 'option29', label: 'iphone xs max' },
      ];

      // تصفية الخيارات بناءً على النص المدخل في input
      const filteredOptions = options.filter(option =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
      );

      // التعامل مع التغيير في input
      const handleInputChange = (event) => {
            setInputValue(event.target.value);
      };

      // التعامل مع QR code الذي تم قراءته
      const handleQRScan = (data) => {
            if (data) {
                  // التأكد من أن البيانات التي تم مسحها هي نص (أو تحويلها إلى نص إذا كانت كائنات)
                  const scannedValue = typeof data === 'string' ? data : JSON.stringify(data);
                  setSerialNumber(scannedValue); // وضع محتوى QR في خانة serial
                  setShowQRScanner(false); // إغلاق كاميرا QR بعد القراءة
            }
      };

      const handleQRError = (err) => {
            console.error(err);
      };

      return (
            <section className="add-products">
                  <Header name={'Add Products'} />
                  <section className="form-add-products">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                              <Row className="mb-3">
                                    <Form.Group as={Col} md="6" className="control" controlId="validationCustom01">
                                          <Form.Label>Product Name</Form.Label>
                                          <Form.Control
                                                required
                                                type="text"
                                                placeholder="Product Name..."
                                                value={inputValue}
                                                onChange={handleInputChange}
                                                list="options-list" // ربط القائمة المنسدلة بـ input
                                          />

                                          <datalist id="options-list">
                                                {filteredOptions.map(option => (
                                                      <option key={option.id} value={option.label} />
                                                ))}
                                          </datalist>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" className="control" controlId="validationCustom02">
                                          <Form.Label>Memory</Form.Label>
                                          <Form.Select aria-label="Default select example">
                                                <option selected>Memory</option>
                                                <option value="64">64</option>
                                                <option value="128">128</option>
                                                <option value="256">256</option>
                                                <option value="512">512</option>
                                                <option value="1000">1000</option>
                                          </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" className="control" controlId="validationCustom03">
                                          <Form.Label>Battery</Form.Label>
                                          <Form.Select aria-label="Default select example">
                                                <option selected>Battery</option>
                                                <option value="64">New</option>
                                                <option value="100">100</option>
                                                <option value="99">99</option>
                                                <option value="98">98</option>
                                                <option value="97">97</option>
                                                <option value="96">96</option>
                                                <option value="95">95</option>
                                                <option value="94">94</option>
                                                <option value="93">93</option>
                                                <option value="92">92</option>
                                                <option value="91">91</option>
                                                <option value="90">85-89</option>
                                                <option value="90">80-84</option>
                                                <option value="90">75-79</option>
                                                <option value="90">70-74</option>
                                                <option value="90">65-69</option>
                                                <option value="90">60-64</option>
                                                <option value="90">55-59</option>
                                                <option value="90">50-54</option>
                                          </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" className="control" controlId="validationCustom04">
                                          <Form.Label>Serial Number</Form.Label>
                                          <Form.Control
                                                required
                                                type="text"
                                                placeholder="Serial Number"
                                                value={serialNumber} // تم ربط القيمة هنا
                                                onChange={(e) => setSerialNumber(e.target.value)} // تمكين التغيير اليدوي
                                                onClick={() => setShowQRScanner(true)} // عند الضغط على الحقل نعرض الكاميرا
                                          />
                                    </Form.Group>
                              </Row>

                              <Button type="submit">Submit form</Button>
                        </Form>
                  </section>

                  {/* إظهار كاميرا QR عند الضغط على حقل Serial Number */}
                  {showQRScanner && (
                        <div className="qr-scanner">
                              <QrScanner
                                    delay={300}
                                    style={{ width: '100%' }}
                                    facingMode="environment" // تحديد الكاميرا الخلفية
                                    onError={handleQRError}
                                    onScan={handleQRScan}
                              />
                              <Button variant="secondary" onClick={() => setShowQRScanner(false)}>
                                    Close Scanner
                              </Button>
                        </div>
                  )}
            </section>
      );
}
