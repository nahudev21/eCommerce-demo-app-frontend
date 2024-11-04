import { API_URL } from "../config";

export const createProductRequest = async (product) => {
  try {
    const response = await fetch(`${API_URL}/products/add`, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(product),
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateProductRequest = async (product, id) => {
  try {
    const response = await fetch(`${API_URL}/products/product/${id}/update`, {
      method: "PUT",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(product),
    });
    if (response.ok) {
      const json = await response.json();
      console.log(json)
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductRequest = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/product/${id}/delete`,
      {
        method: "DELETE",
        headers: { "Content-type": "Application/json" },
      }
    );
    if (response.ok) {
      const json = await response.json();
      console.log(json);
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductsRequest = async () => {
  try {
    const response = await fetch(`${API_URL}/products/all`, {
      method: "GET",
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

export const getProductByIdRequest = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/product/${id}/product`, {
      method: "GET",
      headers: { "Content-type": "Application/json" },
    });
    if (response.ok) {
      const json = await response.json();
      console.log(json);
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByCategoryRequest = async (category) => {
  try {
    const response = await fetch(
      `${API_URL}/products/${category}/all/products`,
      {
        method: "GET",
        headers: { "Content-type": "Application/json" },
      }
    );
    if (response.ok) {
      const json = await response.json();
      console.log(json)
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByBrandRequest = async (brand) => {

  try {
    const response = await fetch(`${API_URL}/products/by-brand?brand=${brand}`, {
      method: "GET",
      headers: { "Content-type": "Application/json" },
      
    });
    if (response.ok) {
      const json = await response.json();
      console.log(json)
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByNameRequest = async (name) => {
  try {
    const response = await fetch(`${API_URL}/products/${name}/products`, {
      method: "GET",
      headers: { "Content-type": "Application/json" },
    });
    if (response.ok) {
      const json = await response.json();
      console.log(json);
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByBrandAndNameRequest = async (brand, name) => {
  try {
    const response = await fetch(`${API_URL}/products/by/brand-and-name?brand=${brand}&name=${name}`,
      {
        method: "GET",
        headers: { "Content-type": "Application/json" },
      }
    );
    if (response.ok) {
      const json = await response.json();
      console.log(json);
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByCategoryAndBrandRequest = async (category, brand) => {
  try {
    const response = await fetch(`${API_URL}/products/by/category-and-brand?category=${category}&brand=${brand}`, {
      method: "GET",
      headers: { "Content-type": "Application/json" },
    });
    if (response.ok) {
      const json = await response.json();
      console.log(json);
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};

export const countProductsByBrandAndNameRequest = async (brand, name) => {
  try {
    const response = await fetch(`${API_URL}/products/count/by-brand/and-name?brand=${brand}&name=${name}`,
      {
        method: "GET",
        headers: { "Content-type": "Application/json" },
      }
    );
    if (response.ok) {
      const json = await response.json();
      console.log(json);
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};