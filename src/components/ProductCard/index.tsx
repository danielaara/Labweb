import './styles.css';

import ProductImag from 'assets/images/product.png';
import ProductPrice from 'components/ProductPrice';

const ProductCard = () => {

    return(
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImag} alt="Imagem do produto" />
              </div>
              <div className="card-bottom-container">
                   <h6>Nome do produto</h6>
                   <ProductPrice />
            </div>

        </div>


    );
}

 export default ProductCard;