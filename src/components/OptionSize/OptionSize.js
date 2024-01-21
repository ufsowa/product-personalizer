import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useCallback } from 'react'
import ProductOption from '../ProductOption/ProductOption'
import styles from '../ProductOption/ProductOption.module.scss'


const OptionSize = ({size, setSize, sizes}) => {

    const handleSize = useCallback((e) => {
        e.preventDefault();
        console.log('render OptionSize fun');
        const clickedElement = e.target;
        if (clickedElement.tagName !== 'BUTTON') return;
        setSize(clickedElement.innerText);
        // eslint-disable-next-line 
    }, []);

    console.log('render Option Size:', handleSize);

    return(
        <ProductOption type="Size" action={handleSize}>
          {sizes.map(sizeItem => 
                        <li key={sizeItem.name}>
                          <button type="button" 
                                  className={ clsx(size === sizeItem.name && styles.active)}>
                                {sizeItem.name}
                           </button>
                        </li> )}
        </ProductOption>
    )
}

OptionSize.propTypes = {
    size: PropTypes.string.isRequired,
    sizes: PropTypes.array.isRequired,
    setSize: PropTypes.func.isRequired,
};

export default OptionSize;