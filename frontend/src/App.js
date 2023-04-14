import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';


function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  console.log('function app')
  console.log(images)

  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      console.log("getSavedImages")
      console.log(res.data)
      setImages(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      getSavedImages()
    }, 
    []
  );

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log('sending fetch requesting')
    console.log(word);

    // fetch(
    //   API_URL + '/new-image' + `?query=${word}`
    // )
    //   .then((res) => 
    //     res.json()
    //   )
    //   .then((data) => {
    //     console.log(data);
    //     data['title'] = word
    //     setImages([data, ...images])
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })

    try {
      const response = await axios.get(API_URL + '/new-image' + `?query=${word}`);
      console.log('axios: adding feach image to the state');
      console.log(response.data);
      setImages([response.data, ...images]);

    } catch (error) {
      console.log('error')
      console.error(error);
    }

    console.log('Clear searching form')
    setWord('')
  };

  const handleDeleteImage = (id) => {
    console.log("handleDeleteImage")
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
