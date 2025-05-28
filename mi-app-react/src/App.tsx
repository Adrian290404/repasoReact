import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// import Counter from './components/Counter';
// import ToggleText from './components/ToggleText';
// import NameForm from './components/NameForm';
// import TitleCounter from './components/TitleCounter';
// import Clock from './components/Clock';
// import RandomUser from './components/RandomUser';
// import Layout from './components/Layout';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
{/* 
            <Route element={<Layout />}>
                <Route path="/counter" element={<Counter />} />
                <Route path="/toggle" element={<ToggleText />} />
                <Route path="/form" element={<NameForm />} />
                <Route path="/title-counter" element={<TitleCounter />} />
                <Route path="/clock" element={<Clock />} />
                <Route path="/random-user" element={<RandomUser />} />
            </Route> */}
        </Routes>
    );
};

export default App;