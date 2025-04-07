import axios from "axios"

const getSingleProduct = async ({ params }) => {
    // console.log(params.ID)
    const apiUrl = `https://fakestoreapi.in/api/products/${params.ID}`
    const products = await axios.get(apiUrl)
    return products.data.product

}

export default getSingleProduct
