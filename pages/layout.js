
import Navbar from '../components/common/navbar';
import Settings from './settings';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            { children }
        </div>
    );
}

export default Layout;