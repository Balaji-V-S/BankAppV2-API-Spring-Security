import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center bg-dark text-white px-4 py-2">
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/customers">Customers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>
        Childrens bank of India
      </div>
    </header>
  );
};

export default Header;
