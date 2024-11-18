import Header from "../../components/header/Header";
import "./addproducts.css";
import { insertProduct } from "../../store/products";
import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Swal from "sweetalert2";

export default function AddProducts() {
      const dispatch = useDispatch();
      const [validated, setValidated] = useState(false);
      const [inputValue, setInputValue] = useState('');
      const [memory, setMemory] = useState('');
      const [battery, setBattery] = useState('');

      const productNameREF = useRef(null);
      const serialNumberREF = useRef(null);
      const buyingPriceREF = useRef(null);
      const sellingPriceREF = useRef(null);

      const handleSubmit = (event) => {
            event.preventDefault();
            const form = event.currentTarget;

            if (form.checkValidity() === false) {
                  event.stopPropagation();
                  setValidated(true); // لإظهار الأخطاء
                  return; // إيقاف العملية إذا كان هناك أخطاء
            }

            const data = {
                  productName: productNameREF.current.value,
                  memory: memory,
                  battery: battery,
                  serial: serialNumberREF.current.value,
                  buyingPrice: buyingPriceREF.current.value,
                  sellingPrice: sellingPriceREF.current.value,
            };

            dispatch(insertProduct(data));

            Swal.fire({
                  position: "center-center",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500,
            });

            // إعادة تعيين الحقول
            productNameREF.current.value = null;
            buyingPriceREF.current.value = null;
            sellingPriceREF.current.value = null;
            serialNumberREF.current.value = null;
            setMemory('');
            setBattery('');

            setValidated(true); // لتأكيد أن النموذج تم التحقق منه وإرساله
      };


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

      const filteredOptions = options.filter(option =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
      );

      const handleInputChange = (event) => {
            setInputValue(event.target.value);
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
                                                ref={productNameREF}
                                          />

                                          <datalist id="options-list">
                                                {filteredOptions.map(option => (
                                                      <option key={option.id} value={option.label} />
                                                ))}
                                          </datalist>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" className="control" controlId="validationCustom02">
                                          <Form.Label>Memory</Form.Label>
                                          <Form.Select
                                                aria-label="Default select example"
                                                value={memory}
                                                onChange={(e) => setMemory(e.target.value)}
                                          >
                                                <option value="64">64</option>
                                                <option value="128">128</option>
                                                <option value="256">256</option>
                                                <option value="512">512</option>
                                                <option value="1000">1000</option>
                                          </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" className="control" controlId="validationCustom03">
                                          <Form.Label>Battery</Form.Label>
                                          <Form.Select
                                                aria-label="Default select example"
                                                value={battery}
                                                onChange={(e) => setBattery(e.target.value)}
                                          >
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
                                                ref={serialNumberREF}
                                          />
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" className="control" controlId="validationCustom05">
                                          <Form.Label>Buying Price</Form.Label>
                                          <Form.Control
                                                required
                                                type="number"
                                                placeholder="Buying Price"
                                                ref={buyingPriceREF}
                                          />
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" className="control" controlId="validationCustom06">
                                          <Form.Label>Selling Price</Form.Label>
                                          <Form.Control
                                                required
                                                type="number"
                                                placeholder="Selling Price"
                                                ref={sellingPriceREF}
                                          />
                                    </Form.Group>
                              </Row>

                              <Button type="submit">Submit form</Button>
                        </Form>
                  </section>
            </section>
      );
}
