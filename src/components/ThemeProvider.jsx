import { ThemeProvider } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import './styles.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>Bem-vindo ao Ninja Multi Mídia</h1>
          <ThemeToggleButton />
        </header>
        {/* Outros componentes da sua aplicação */}
      </div>
    </ThemeProvider>
  );
};

export default App;
