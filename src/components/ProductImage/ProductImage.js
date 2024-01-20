import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = ({name, color, title}) => {
    return (
        <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${color}.jpg`} />
       </div>
    );
}

ProductImage.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default ProductImage;

