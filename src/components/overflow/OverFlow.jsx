import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProducts } from "../../store/products";
import "./overflow.css";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function OverFlow({ filterDays }) {
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(getProducts());
      }, [dispatch]);
      const today = moment();
      const sales = useSelector((state) => state.salesSlice.sales);
      const products = useSelector((state) => state.products.products);
      // تصفية المبيعات بناءً على filterDays
      const filteredSales = sales.filter((sale) => {
            const saleDate = moment(sale.soldAt, "DD/MM/YYYY - HH:mm");
            const filterDate = moment().subtract(filterDays, "days");
            return saleDate.isBetween(filterDate, today, null, "[]");
      });

      // حساب الربح الإجمالي
      const totalProfit = filteredSales.reduce((total, sale) => {
            return total + (sale.sellingPrice - sale.buyingPrice);
      }, 0);


      return (
            <section className="OverFlow">
                  <section className="boxs">
                        <section className="box">
                              <FontAwesomeIcon icon="fa-solid fa-shop" />
                              <p>No. products</p>
                              <h2>{products.length}</h2> {/* عدد المنتجات */}
                        </section>
                        <section className="box">
                              <FontAwesomeIcon icon="fa-solid fa-sack-dollar" />
                              <p>Net Profit</p>
                              <h2>$<span>{totalProfit}</span></h2> {/* الربح الإجمالي */}
                        </section>
                        <section className="box">
                              <FontAwesomeIcon icon="fa-solid fa-shop-slash" />
                              <p>No. Sold</p>
                              <h2>{filteredSales.length}</h2> {/* عدد المنتجات المباعة */}
                        </section>
                        <section className="box">
                              <FontAwesomeIcon icon="fa-regular fa-calendar-days" />
                              <p>Date</p>
                              <h2>{today.format('DD/MM/YYYY')}</h2>
                        </section>
                  </section>
            </section>
      );
}
