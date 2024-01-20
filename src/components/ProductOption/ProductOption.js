import styles from './ProductOption.module.scss'
import PropTypes from 'prop-types'

const ProductOption = ({type, action, children}) => {
    return (
        <div className={styles.colors}>
        <h3 className={styles.optionLabel}>{type}</h3>
        <ul className={styles.choices} onClick={action}>
            {children}
        </ul>
      </div>
    )
}

ProductOption.propTypes = {
    type: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired,
};

export default ProductOption;