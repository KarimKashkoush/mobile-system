import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./overflow.css"
import moment from "moment"
export default function OverFlow() {
      const today = moment();

      return (
            <ssection className="OverFlow">
                  <section className="boxs">
                        <section className="box">
                              <FontAwesomeIcon icon="fa-solid fa-sack-dollar" />
                              <p>Net Profit</p>
                              <h2>$<span>1229</span></h2>
                        </section>
                        <section className="box">
                              <FontAwesomeIcon icon="fa-solid fa-shop-slash" />
                              <p>No. Sold</p>
                              <h2>12</h2>
                        </section>
                        <section className="box">
                              <FontAwesomeIcon icon="fa-solid fa-shop" />
                              <p>No. products</p>
                              <h2>30</h2>
                        </section>
                        <section className="box">
                              <FontAwesomeIcon icon="fa-regular fa-calendar-days" />
                              <p>Date</p>
                              <h2>{today.format('DD/MM/YYYY')}</h2>
                        </section>
                  </section>
            </ssection>
      )
}
