import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
        <h1>Ejercicios de React</h1>
        <p>Haz clic en un ejercicio</p>

        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><Link to="/counter">🧮 Contador (useState)</Link></li>
            <li><Link to="/toggle">👁️ Mostrar/Ocultar texto (useState)</Link></li>
            <li><Link to="/form">📝 Formulario controlado (useState)</Link></li>
            <li><Link to="/title-counter">🧠 Contador que actualiza el título (useEffect)</Link></li>
            <li><Link to="/clock">⏰ Reloj en vivo (useEffect)</Link></li>
            <li><Link to="/random-user">📦 Consumir API RandomUser (useEffect)</Link></li>
        </ul>
    </div>
  );
};

export default Home;
