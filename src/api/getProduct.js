import productsData from './products.json'

const getProduct = async () => {
    try {
        // Try to fetch from external API first
        const apiUrl = 'https://fakestoreapi.in/api/products?limit=200'
        const response = await fetch(apiUrl)
        if (response.ok) {
            const products = await response.json()
            return products.products || []
        }
    } catch (error) {
        console.log('External API not available, using local data')
    }

    // Fallback to local data
    return productsData.products || []
}

export default getProduct
