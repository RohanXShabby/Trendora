import axios from "axios"

const getProduct = async () => {
    const apiUrl = 'https://fakestoreapi.in/api/products?limit=200'
    const products = await axios.get(apiUrl)
    return products.data.products
}

export default getProduct
