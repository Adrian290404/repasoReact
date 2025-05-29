import { Link, Outlet, useLocation } from "react-router-dom"
import { Header, GoBack, Title, Footer, Description } from "../styles/layoutStyles"
import { IoHome } from "react-icons/io5";

export const Layout: React.FC = () => {

    const pageInfo: Record<string, { title: string; description: string }> = {
        "/calculator": {
            title: "Calculadora",
            description: "Crea una calculadora totalmente funcional."
        }
    }

    const location = useLocation();
    const currentPath = location.pathname;
    const info = pageInfo[currentPath];

    return <>
        <Header>
            <GoBack>
                <Link to="/home">
                    <IoHome size={20}/>
                </Link>
            </GoBack>
            <Title>{info?.title || "Ejercicio"}</Title>
            <Description>{info?.description || "Descripcion del ejercicio"}</Description>
        </Header>
        <Outlet />
        <Footer>
            <p>Adrián Martín García</p>
        </Footer>
    </>
}