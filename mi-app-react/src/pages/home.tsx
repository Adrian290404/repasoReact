import { Card } from '../components/card';
import { Header, Exercises, StyledLink } from '../styles/homeStyles';

export const Home: React.FC = () => {
    return <>
        <Header>Ejercicios de React</Header>
        <Exercises>
            <StyledLink to="/calculator">
                <Card title="Calculadora" root="/calculator" />
            </StyledLink>
            <StyledLink to="/clock">
                <Card title="Reloj" root="/clock" />
            </StyledLink>
            {/* <StyledLink to="/toggle">Mostrar/Ocultar texto</StyledLink>
            <StyledLink to="/form">Formulario controlado</StyledLink>
            <StyledLink to="/title-counter">Contador que actualiza el título</StyledLink>
            
            <StyledLink to="/random-user">Consumir API RandomUser</StyledLink> */}
        </Exercises>
    </>;
};