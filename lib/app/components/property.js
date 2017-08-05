import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';

const STYLE = { padding: 5 };

export function PropertyComponent({ property }) {
  return (
    <li
      className="property"
    >
      <span style={STYLE}><b>id:</b> {property.id}</span>
      <span style={STYLE}><b>address:</b> {property.address}</span>
    </li>
  );
}

export default Relay.createContainer(PropertyComponent, {
  fragments: {
    property: () => Relay.QL`
      fragment on Property {
        id,
        address
      }
    `,
  },
});

PropertyComponent.propTypes = { property: PropTypes.object.isRequired };
