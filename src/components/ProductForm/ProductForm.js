import styles from './ProductForm.module.scss'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import OptionSize from '../OptionSize/OptionSize'
import OptionColor from '../OptionColor/OptionColor'

const ProductForm = ({color, size, ...props}) => {

    const sizes = props.sizes;
    const setSize = props.setSize;

    const colors = props.colors;
    const setColor = props.setColor;

    return (
        <form>
            <OptionSize {...{size, setSize, sizes}} />
            <OptionColor {...{color, setColor, colors}} />
            <Button className={styles.button} sendOrder={props.sendOrder}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>    );
};

ProductForm.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    setColor: PropTypes.func.isRequired,
    setSize: PropTypes.func.isRequired,
    sendOrder: PropTypes.func.isRequired,
};

export default ProductForm;