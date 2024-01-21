import clsx from 'clsx'
import PropTypes from 'prop-types'
import ProductOption from '../ProductOption/ProductOption'
import styles from '../ProductOption/ProductOption.module.scss'

const OptionColor = ({color, setColor, colors}) => {

    const handleColor = (e) => {
        e.preventDefault();
        console.log('render OptionColor fun');
        const clickedElement = e.target;
        if (clickedElement.tagName !== 'BUTTON') return;
        setColor(clickedElement.id);
    };

    console.log('render Option Color:', handleColor);

    return(
        <ProductOption type="Color" action={handleColor}>
            {colors.map(colorItem => 
                            <li key={colorItem}>
                                <button type="button" 
                                        id={colorItem}
                                        className={clsx(
                                            styles['color'  + colorItem[0].toUpperCase()
                                                            + colorItem.substr(1).toLowerCase()],
                                            color === colorItem && styles.active)} />
                            </li> )}
        </ProductOption>
    )
}

OptionColor.propTypes = {
    color: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    setColor: PropTypes.func.isRequired,
};

export default OptionColor;