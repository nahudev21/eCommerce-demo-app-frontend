import { API_URL } from "../config";

const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      resolve(reader.result.split(',' [1]));
    }
  })
}

export const getImageRequest = async (id) => {
  try {
    const response = await fetch(`${API_URL}/images/image/download/${id}`, {
      method: "GET",
      headers: { "Content-type": "Application/json" },
    });
    if (response.ok) {
      const json = await response.blob();
      const urlImage = URL.createObjectURL(json)
      //const imageBase = await blobToBase64(json)
      return urlImage
    }
  } catch (error) {
    console.log(error);
  }
};



export const createImageRequest = async (files, productId) => {
  try {
    const response = await fetch(`${API_URL}/images/upload`, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(files),
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateImageRequest = async (id, file) => {
  try {
    const response = await fetch(`${API_URL}/images/image/${id}/update`, {
      method: "PUT",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(file),
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteImageRequest = async (id) => {
  try {
    const response = await fetch(`${API_URL}/images/image/${id}/delete`, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};