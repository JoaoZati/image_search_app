import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
}

function App() {
  return (
    <div>
      <Header title="Image Gallery" bg="info"/>
      <Search handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
