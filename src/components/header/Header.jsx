import './header.css'
export default function Header({name}) {

      return (
            <header className="header">
                  <h2>{name}</h2>

                  <section className="personal">
                        <h3>Karim Kashkoush</h3>
                  </section>
            </header>
      )
}
