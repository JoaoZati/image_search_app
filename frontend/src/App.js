import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';


function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('function app')
  // console.log(images)

  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      // console.log("getSavedImages")
      res.data.map((image) => image["saved_database"] = true)
      // console.log(res.data)
      setImages(res.data || []);
      setLoading(false);
      toast.success("Saved images downloaded");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
      getSavedImages()
    },
    [] // here you set variable that when changed its execute getSavedImages()
  );

  const handleSearchSubmit = async (e) => {
    console.log('handleSearchSubmit')
    e.preventDefault();
    console.log(word);

    try {
      const response = await axios.get(API_URL + '/new-image' + `?query=${word}`);
      console.log('axios: adding feach image to the state');
      console.log(response.data);
      if (!Object.keys(response.data).length) {
        alert('Not found any image with this name')
      }
      setImages([response.data, ...images]);
      toast.info(`New image ${word} was found!`)

    } catch (error) {
      console.log('error');
      console.error(error);
      toast.error(error.message);
    }

    console.log('Clear searching form')
    setWord('')
  };

  const handleDeleteImage = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/images/${id}`);
      if (res.data?.deleted_id) {
        setImages(images.filter((image) => image.id !== id));
      }
      toast.success(`Image Deleted with success`);
    } catch (error) {
      console.log('handleDeleteImage: Error');
      console.log(error);
      toast.error(error.message);
    }

    // console.log("handleDeleteImage")
    setImages(
      images.filter((image) => image.id !== id)
    )
  };

  const handleSaveImage = async (id) => {
    // console.log('handleSaveImage function')
    const imageToBeSaved = images.find((image) => image.id === id);
    const data = imageToBeSaved

    // console.log(data)
    try {
      const res = await axios.post(`${API_URL}/images`, data);
      // console.log("handleSaveImage data:")
      // console.log(res.data)

      if (res.data?.id) {
        let new_images = images.map(
          (image) => image.id === id ? {...image, "saved_database": true}: {...image}
        );
        // console.log("new_images")

        setImages(new_images)
        toast.success(`Image Saved in database with success`);
      }
    } catch (error) {
      console.log('axios handleSaveImage Error');
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Header title="Image Gallery" bg="info"/>
      {
        loading ? (
          <Loader />
        ) : (
          <> {/* Just for use more than one JXS element, not the case but if want to know */}
            <Search
              word={word}
              setWord={setWord}
              handleSubmit={handleSearchSubmit}
              images={images}
              handleDeleteImage={handleDeleteImage}
              handleSaveImage={handleSaveImage}
            />
          </>
        )
      }
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
