import React from 'react';
import { connect } from 'react-redux';
import { add } from '../actions/index';


const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.add(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {add})(AdditionalFeature)
