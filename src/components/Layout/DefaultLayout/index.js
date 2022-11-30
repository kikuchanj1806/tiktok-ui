import Header from "../components/Header/index";
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="Container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default DefaultLayout