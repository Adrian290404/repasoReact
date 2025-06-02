import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/home';
import { Calculator } from './components/calculator';
// import ToggleText from './components/ToggleText';
// import NameForm from './components/NameForm';
// import TitleCounter from './components/TitleCounter';
import { Clock } from './components/clock';
// import RandomUser from './components/RandomUser';
import { Layout } from './components/layout';
import { GlobalStyle } from './styles/globalStyles';

export const App: React.FC = () => {
    return <>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
    
            <Route path="/home" element={<Home />} />

            <Route element={<Layout />}>
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/clock" element={<Clock />} />
                {/* <Route path="/toggle" element={<ToggleText />} />
                <Route path="/form" element={<NameForm />} />
                <Route path="/title-counter" element={<TitleCounter />} />
                
                <Route path="/random-user" element={<RandomUser />} /> */}
            </Route>
        </Routes>            
    </>;
};