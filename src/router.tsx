import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Illustrations from "./pages/Illustrations";
import Admin from "./pages/Admin";


const Layout = () => {
    return (
        <>
        <div
            className="absolute z-[-1] inset-0 bg-repeat bg-center"
            style={{
              backgroundImage: "url('/src/assets/background.png')",
              backgroundSize: '106%',
              opacity: 0.12, 
              zIndex: 0,
            }}
            
          />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div></>
        
    )
}

export default createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'illustrations',
                element: <Illustrations />
            }
        ]
    },
    {
        path: 'admin',
        element: <Admin />
    }
])