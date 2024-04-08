import axios from 'axios';

class ProductsService {
    static getAllProducts = () => axios.get('/products');
}
export default ProductsService;