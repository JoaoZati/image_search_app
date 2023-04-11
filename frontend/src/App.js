import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';


function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  console.log(images)

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);

    fetch(
      API_URL + '/new-image' + `?query=${word}`
    )
      .then((res) => 
        res.json()
      )
      .then((data) => {
        console.log(data);
        data['title'] = word
        setImages([data, ...images])
      })
      .catch((err) => {
        console.log(err);
      })

    setWord('')
  };

  const handleDeleteImage = (id) => {
    setImages(
      images.filter((image) => image.id !== id)
    )
  };

  return (
    <div>
      <Header title="Image Gallery" bg="info"/>
      <Search
        word={word}
        setWord={setWord}
        handleSubmit={handleSearchSubmit}
        images={images}
        handleDeleteImage={handleDeleteImage}
      />
    </div>
  );
}

export default App;
