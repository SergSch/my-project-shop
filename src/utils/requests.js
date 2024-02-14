export const fetchProducts = async (setProducts) => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) throw new Error('Somthing went wrong');
    const data = await response.json();
    const newData = data.products.slice(0, 8);
    setProducts(newData);
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductsInspiration = async (setSliderProducts) => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) throw new Error('Somthing went wrong');
    const data = await response.json();
    const newData = data.products.slice(8, 12);
    setSliderProducts(newData);
  } catch (error) {
    console.log(error);
  }
};

export const fetchFirstShopProducts = async (setFirstShopProducts) => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) throw new Error('Somthing went wrong');
    const data = await response.json();
    const newData = data.products.slice(0, 16);
    setFirstShopProducts(newData);
  } catch (error) {
    console.log(error);
  }
};

export const fetchSecondShopProducts = async (setSecondShopProducts) => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) throw new Error('Somthing went wrong');
    const data = await response.json();
    const newData = data.products.slice(14);
    setSecondShopProducts(newData);
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleProduct = async (id, setSingleProduct) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) throw new Error('Somthing went wrong');
    const data = await response.json();
    setSingleProduct(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountry = async (setCountries) => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) throw new Error('Somthig went wrong');
    const data = await response.json();
    setCountries(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchCountry();
