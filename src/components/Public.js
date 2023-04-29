import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Dan D. Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful City of Lakes, Bhopal, BootCom Systems provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          bootcom systems
          <br />
          M.P. Nagar, Zone-1
          <br />
          Bhopal, 462011
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: stackHolder name</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
