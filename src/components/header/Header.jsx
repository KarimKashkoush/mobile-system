import './header.css'
import { Link } from 'react-router-dom'
export default function Header({ name }) {

      return (
            <header className="header">
                  <h2>{name}</h2>

                  <section className="personal">
                        <Link to="/signup">signup</Link>
                        {/* <h3>Karim Kashkoush</h3> */}
                  </section>
            </header>
      )
}
