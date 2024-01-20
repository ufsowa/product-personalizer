import styles from './Product.module.scss';
import PropTypes from 'prop-types'
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ basePrice, title, ...props}) => {

  const [name] = useState(props.name);
  const [color, setColor] = useState(props.colors[0]);
  const [size, setSize] = useState(props.sizes[0].name);

  const getPrice = () => {
    return basePrice + props.sizes.filter(item => item.name === size)[0].additionalPrice;
  };

  const sendOrder = (e) => {
    const order = {
      name: title,
      price: getPrice(),
      size,
      color,
    };
    console.log('Summary')
    console.log('===============')
    console.log(JSON.stringify(order))
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} color={color} title={title}/>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
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