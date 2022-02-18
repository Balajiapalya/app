
import Navbar from '../components/common/navbar';


const Layout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            { children }
        </div>
    );
}

export default Layout;