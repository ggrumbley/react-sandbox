import React, { PropTypes } from 'react';
import Rating from '../rating/Rating';
import Suggest from '../suggest/Suggest';

class FormInput extends React.Component {
  getValue() {
    return 'value' in this.refs.input
      ? this.refs.input.value
      : this.refs.input.getValue();
  }

  render () {
    const common = {
      id: this.props.id,
      ref: 'input',
      defaultValue: this.props.defaultValue,
    };
    switch (this.props.type) {
      case 'year':
        return (
          <input
            {...common}
            type="number"
            defaultValue={this.props.defaultValue || new Date().getFullYear()}
          />
        )
      case 'suggest':
        return <Suggest {...common} options={this.props.options} />;
      case 'rating':
      return (
        <Rating
          {...common}
          defaultValue={parseInt(this.props.defaultValue, 10)}
        />
      );
      case 'text':
        return <textarea {...common} />;
      default:
        return <input {...common} type="text" />;
    }
  }
}

FormInput.propTypes = {
  type: PropTypes.oneOf(['year', 'suggest', 'rating', 'text', 'input']),
  id: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.any,
};

export default FormInput;
