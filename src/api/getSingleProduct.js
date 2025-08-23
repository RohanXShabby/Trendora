import productsData from './products.json'

const getSingleProduct = async ({ params }) => {
    try {
        // Try to fetch from external API first
        const apiUrl = `https://fakestoreapi.in/api/products/${params.ID}`
        const response = await fetch(apiUrl)
        if (response.ok) {
            const product = await response.json()
            return product.product || null
        }
    } catch (error) {
        console.log('External API not available, using local data')
    }

    // Fallback to local data
    const product = productsData.products.find(p => p.id === parseInt(params.ID))
    return product || null
}

export default getSingleProduct
