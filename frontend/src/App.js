import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Header title="Image Gallery" bg="info"/>
      <Search />
    </div>
  );
}

export default App;
