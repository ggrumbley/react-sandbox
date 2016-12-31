import React, {PropTypes} from 'react';

const Button = (props) => {
  return props.href
    ? <a {...props} />
  : <button {...props} />;
}

Button.propTypes = {
  href: PropTypes.string,
};

export default Button
