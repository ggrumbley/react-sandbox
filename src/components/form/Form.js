import React, { Component, PropTypes } from 'react'
import Rating from '../rating/Rating'
import FormInput from '../form-input/FormInput'

class Form extends Component {
  getData () {
    let data = {};
    this.props.fields.forEach((field) => {
      return data[field.id] = this.refs[field.id].getValue();
    });
    return data;
  }
  render() {
    return (
      <div className="well bs-component">
        <form className="form-horizontal">
          <fieldset>
          {this.props.fields.map((field: FormInputField) => {
          const prefilled: FormInputFieldValue = (this.props.initialData && this.props.initialData[field.id]) || '';
          if (!this.props.readonly) {
            return (
              <div className="form-group" key={field.id}>
                <label className="col-lg-2 control-label" htmlFor={field.id}>{field.label}:</label>
                <FormInput {...field} ref={field.id} defaultValue={prefilled} />
              </div>
            );
          }
          if (!prefilled) {
            return null;
          }
          return (
            <div className="form-group" key={field.id}>
              <span className="col-lg-2 control-label">{field.label}:</span>
              {
                field.type === 'rating'
                  ? <Rating readonly={true} defaultValue={parseInt(prefilled, 10)} />
                  : <div>{prefilled}</div>
              }
            </div>
          );
        }, this)}
          </fieldset>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  initialData: PropTypes.object,
  readonly: PropTypes.bool,
};

export default Form;
