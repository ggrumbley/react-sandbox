import React, { PropTypes } from 'react'

const Actions = (props) => {
  return (
    <div className="btn-group">
      <span className="btn btn-info btn-xs"
            tabIndex="0"
            title="More info"
            onClick={props.onAction.bind(null, 'info')}>&#8505;</span>
      <span className="btn btn-primary btn-xs"
            tabIndex="0"
            title="Edit"
            onClick={props.onAction.bind(null, 'edit')}>&#10000;</span>
      <span className="btn btn-danger btn-xs"
            tabIndex="0"
            title="Delete"
            onClick={props.onAction.bind(null, 'delete')}>x</span>
    </div>
  )
};

Actions.propTypes = {
  onAction: PropTypes.func,
};

Actions.defaultProps = {
  onAction: () => {},
};
export default Actions;
