import "./productslist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProducts } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProductsList() {
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(getProducts());
      }, [dispatch]);

      const products = useSelector((state) => state.products.products);
      const data = products.map((product, index) => (
            <tr key={index}>
                  <td>{++index}</td>
                  <td>{product.productName}</td>
                  <td>{product.sellingPrice}</td>
                  <td>{product.serial}</td>
                  <td>
                        <button>Sale</button>
                        <button><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>
                        <button><FontAwesomeIcon icon="fa-solid fa-trash" /></button>
                  </td>
            </tr>
      ))

      return (
            <section className="products-list">
                  <section className="table-list">
                        <table>
                              <thead>
                                    <tr>
                                          <th>#</th>
                                          <th>Product Name</th>
                                          <th>Price</th>
                                          <th>code</th>
                                          <th>Actions</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {data}
                              </tbody>
                        </table>
                  </section>
            </section>
      )
}
