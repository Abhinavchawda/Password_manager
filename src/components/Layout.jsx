import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-center">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;