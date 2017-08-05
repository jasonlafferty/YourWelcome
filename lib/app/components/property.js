import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';

export function PropertyComponent({ property }) {
  return (
    <li className="property"><b>address:</b> {property.address}</li>
  );
}

export default Relay.createContainer(PropertyComponent, {
  fragments: {
    property: () => Relay.QL`
      fragment on Property {
        address
      }
    `,
  },
});

PropertyComponent.propTypes = { property: PropTypes.object.isRequired };
