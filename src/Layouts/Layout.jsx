import { Fragment } from "react";
import Route from "../Routes/Route";
import FooterPage from "../pages/Footer/Footer";
import HeaderPage from "../pages/Header/Header";
const Layout = () => {
    return ( 
        <Fragment>
            <HeaderPage/>
             <div>
            <Route/>
            </div>
            <FooterPage/>
        </Fragment>
     );
}
 
export default Layout;