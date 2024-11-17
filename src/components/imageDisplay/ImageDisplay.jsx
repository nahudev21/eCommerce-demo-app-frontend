import './ImageDisplay.css'
import { useState, useEffect } from "react";
import { getImageRequest } from "../../api/images";

const ImageDisplay = ({ imageId }) => {
  const [imageUrl, setImageUrl] = useState(""); 
  const id = imageId[0]
  
  useEffect(() => {
    // Llamada a la API para obtener la imagen (asumiendo que el backend la sirve en /images/{imageName})
    const fetchImage = async () => {

      try {
        const path = await getImageRequest(id);
        setImageUrl(path);
      } catch (error) {
        console.log(error)
      }

    }

    fetchImage();
  }, []);

  return (
    <div className='display_container'>
      {imageUrl ? (
        <img className='display_img' src={imageUrl} alt={imageUrl} />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default ImageDisplay;
