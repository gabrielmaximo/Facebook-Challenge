import React from 'react'
import PropTypes from 'prop-types'

function techItem({tech, onDelete}) {
  return (
    <li>
      {tech}
      <a 
        href={''} 
        onClick={onDelete}>
        <small>
          <b>    ->  REMOVE</b>
        </small>
      </a>
    </li>
  );
}

techItem.defaultProps = {
  tech: "default"
}

techItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}

export default techItem