import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../../store/salesSlice";
import moment from "moment";

const SalesList = ({ filterDays }) => {
      const dispatch = useDispatch();
      const sales = useSelector((state) => state.salesSlice.sales);
      const [filteredSales, setFilteredSales] = useState([]);

      useEffect(() => {
            dispatch(getSales());
      }, [dispatch]);

      useEffect(() => {
            const now = moment();
            const filterDate = moment().subtract(filterDays, "days");

            const filtered = sales.filter((sale) => {
                  const saleDate = moment(sale.soldAt, "DD/MM/YYYY - HH:mm");
                  return saleDate.isBetween(filterDate, now, null, "[]");
            });
            setFilteredSales(filtered);
      }, [sales, filterDays]);

      return (
            <div>
                  <section className="products-list">
                        <section className="table-list">
                              <table>
                                    <thead>
                                          <tr>
                                                <th>Product Name</th>
                                                <th>Selling Price</th>
                                                <th>Buying Price</th>
                                                <th>Profit</th>
                                                <th>user name</th>
                                                <th>date</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {filteredSales.map((sale) => (
                                                <tr key={sale.id}>
                                                      <td>{sale.productName}</td>
                                                      <td>{sale.sellingPrice}</td>
                                                      <td>{sale.buyingPrice}</td>
                                                      <td>{sale.sellingPrice - sale.buyingPrice}</td>
                                                      <td>{sale.userName}</td>
                                                      <td>{sale.soldAt}</td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </section>
                  </section>
            </div>
      );
};

export default SalesList;
