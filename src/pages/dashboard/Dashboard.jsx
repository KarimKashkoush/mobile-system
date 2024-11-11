import Header from "../../components/header/Header"
import OverFlow from "../../components/overflow/OverFlow"
import ProductsList from "../../components/productsList/ProductsList"
export default function Dashboard() {
      return (
            <div>
                  <Header name={"Dashboard"}/>
                  <OverFlow />
                  <ProductsList />
            </div>
      )
}
