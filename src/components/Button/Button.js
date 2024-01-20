import styles from './Button.module.scss';
import clsx from 'clsx';
import PropsTypes from 'prop-types';

const Button = (props) => {

    const handleClick = (e) => {
        e.preventDefault();
        props.sendOrder()
    }

    return (<button onClick={handleClick} className={clsx(styles.button, props.className)}>{props.children}</button>);
};

Button.propsType = {
    sendOrder: PropsTypes.func.isRequired,
    className: PropsTypes.string.isRequired,
} ;

export default Button;