import styles from './Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types'
import Button from '../Button/Button';
import { useState } from 'react';

const Product = ({ basePrice, title, ...props}) => {
  console.log('product render')

  const [name] = useState(props.name);
  const [color, setColor] = useState(props.colors[0]);
  const [size, setSize] = useState(props.sizes[0].name);

  const handleSize = (e) => {
    e.preventDefault();
    const clickedElement = e.target;
    if (clickedElement.tagName !== 'BUTTON') return;
    setSize(clickedElement.innerText);
  };

  const handleColor = (e) => {
    e.preventDefault();
    const clickedElement = e.target;
    if (clickedElement.tagName !== 'BUTTON') return;
    setColor(clickedElement.id);
  };

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
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${color}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices} onClick={handleSize}>
              {props.sizes.map(sizeItem => <li key={sizeItem.name}>
                                              <button type="button" 
                                                      className={ clsx(size === sizeItem.name && styles.active)}>
                                                      {sizeItem.name}
                                              </button></li> )}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices} onClick={handleColor}>
              {props.colors.map(colorItem => <li key={colorItem}>
                                                <button type="button" 
                                                        id={colorItem}
                                                        className={clsx(styles['color' + colorItem[0].toUpperCase() + colorItem.substr(1).toLowerCase()],
                                                                    color === colorItem && styles.active)} /></li>)}
            </ul>
          </div>
          <Button className={styles.button} sendOrder={sendOrder}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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