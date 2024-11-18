import "./productslist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProducts, deleteProduct } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ProductsList() {
      const dispatch = useDispatch();
      const [searchTerm, setSearchTerm] = useState('');

      useEffect(() => {
            dispatch(getProducts());
      }, [dispatch]);

      const deleteItem = async (id) => {
            const result = await Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                  await dispatch(deleteProduct(id));
                  dispatch(getProducts());
                  Swal.fire("Deleted!", "The product has been deleted.", "success");
            }
      };

      const products = useSelector((state) => state.products.products);
      const filteredProducts = products.filter((product) =>
            product.serial.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const data = filteredProducts.length > 0 ? filteredProducts.map((product, index) => (
            <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.sellingPrice}</td>
                  <td>{product.serial}</td>
                  <td>
                        <button>Sale</button>
                        <button><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>
                        <button onClick={() => { deleteItem(product.id) }} ><i className="fa-solid fa-trash"></i></button>
                  </td>
            </tr>
      )) : <tr><td colSpan="5">No products found</td></tr>;

      return (
            <section className="products-list">
                  <section className="table-list">
                        <table>
                              <thead>
                                    <tr>
                                          <th colSpan={5}>
                                                <form onSubmit={(e) => { e.preventDefault() }}>
                                                      <i className="fa-solid fa-search"></i>
                                                      <input
                                                            type="text"
                                                            placeholder="Search by Serial Number"
                                                            value={searchTerm}
                                                            onChange={(e) => setSearchTerm(e.target.value)}  // تحديث قيمة searchTerm
                                                      />
                                                </form>
                                          </th>
                                    </tr>
                                    <tr>
                                          <th>#</th>
                                          <th>Product Name</th>
                                          <th>Price</th>
                                          <th>Code</th>
                                          <th>Actions</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {data}
                              </tbody>
                        </table>
                  </section>
            </section>
      );
}
