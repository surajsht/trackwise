import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container py-4">
      <div className="flex items-center justify-between">
        <div className="logo">
          <h1 className="text-3xl font-bold font-heading">
            Track<span className="text-primary">Wise</span>
          </h1>
        </div>

        <ul className="flex items-center gap-6">
          <li>
            <NavLink to="/"> Dashboard </NavLink>
          </li>
          <li>
            <NavLink to="/income"> Income </NavLink>
          </li>
          <li>
            <NavLink to="/expense"> Expense </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
