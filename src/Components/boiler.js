const Boiler = () => {
    return ( 
        <ul>
        <li className='top_title'>Products</li>
         <li>
        <NavLink to="/"  className={({ isActive }) => (isActive ? "active-link" : "link")}>Products & solutions</NavLink>
      </li>
      <li>
        <NavLink to="/resources" className={({ isActive }) => (isActive ? "active-link" : "link")}>Resources</NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "link")}>About us</NavLink>
      </li>
      <li>
        <NavLink to="/price" className={({ isActive }) => (isActive ? "active-link" : "link")}>Price</NavLink>
      </li>
      </ul>
     );
}
 
export default Boiler;