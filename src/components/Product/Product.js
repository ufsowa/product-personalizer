import styles from './Product.module.scss';
import PropTypes from 'prop-types'
import { useCallback, useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ basePrice, title, ...props}) => {

  const [name] = useState(props.name);
  const [color, setColor] = useState(props.colors[0]);
  const [size, setSize] = useState(props.sizes[0].name);

  const price = useMemo(() => {
    return basePrice + props.sizes.filter(item => item.name === size)[0].additionalPrice;
    // eslint-disable-next-line 
  }, [size]);

  const sendOrder = useCallback((e) => {
    const order = {
      name: title,
      price,
      size,
      color,
    };
    console.log('Summary')
    console.log('===============')
    console.log(JSON.stringify(order))
    // eslint-disable-next-line 
  }, []);

  return (
    <article className={styles.product}>
      <ProductImage name={name} color={color} title={title}/>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm {...{...props, color, size, setSize, setColor, sendOrder}} />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  basePrice: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes:  PropTypes.array.isRequired,
};

export default Product;