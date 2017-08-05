import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';
import Property from './property';

const SORT_KEYS = ['address', 'id'];
const SORT_ORDERS = ['asc', 'desc'];

export class PropertiesList extends Component {
  renderSelect(values, onchange) {
    return (
      <select onChange={e => onchange(e.target.value)}>
        {values.map(key => <option key={key} value={key}>{key}</option>)}
      </select>
    );
  }
  renderSortKey() {
    const { sortKey, updateSortKey } = this.props;
    return (
      <div className="sort-key">
        <p>
          current sort key: {sortKey}
        </p>
        {this.renderSelect(SORT_KEYS, updateSortKey)}
      </div>
    );
  }
  renderSortOrder() {
    const { sortOrder, updateSortOrder } = this.props;
    return (
      <div className="sort-order">
        <p>
          current sort order: {sortOrder}
        </p>
        {this.renderSelect(SORT_ORDERS, updateSortOrder)}
      </div>
    );
  }

  render() {
    const { viewer } = this.props;
    return (
      <div className="properties">
        {this.renderSortKey()}
        {this.renderSortOrder()}
        <ul className="properties-list">
          {viewer.properties.map((p, i) => <Property key={i} property={p} />)}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(PropertiesList, {
  initialVariables: {
    sortKey: null,
    sortOrder: null,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        properties(sortKey: $sortKey, sortOrder: $sortOrder) {
          ${Property.getFragment('property')}
        }
      }
    `,
  },
});

PropertiesList.propTypes = {
  sortKey: PropTypes.oneOf(SORT_KEYS).isRequired,
  updateSortKey: PropTypes.func.isRequired,
  sortOrder: PropTypes.oneOf(SORT_ORDERS).isRequired,
  updateSortOrder: PropTypes.func.isRequired,
  viewer: PropTypes.object.isRequired,
};
