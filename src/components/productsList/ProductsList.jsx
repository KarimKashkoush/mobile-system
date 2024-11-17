import "./productslist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProducts, deleteProduct } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProductsList() {
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(getProducts());
      }, [dispatch]);

      const deleteItem = (data) => {
            const confirm = window.confirm('Are you sure you want to delete');
            if (confirm) {
                  dispatch(deleteProduct(data));
                  dispatch(getProducts());
            }
      }

      const products = useSelector((state) => state.products.products);
      const data = products.length > 0 ? products.map((product, index) => (
            <tr key={index}>
                  <td>{++index}</td>
                  <td>{product.productName}</td>
                  <td>{product.sellingPrice}</td>
                  <td>{product.serial}</td>
                  <td>
                        <button>Sale</button>
                        <button><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>
                        <button><FontAwesomeIcon icon="fa-solid fa-trash" onClick={() => { deleteItem(product.id) }} /></button>
                  </td>
            </tr>
      )) : <tr> <td colSpan="5">No products found</td> </tr>;

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
