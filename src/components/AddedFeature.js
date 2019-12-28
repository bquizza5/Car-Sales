import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../actions/index';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {
        console.log('remove: ' + props.feature)
        props.remove(props.feature)
        
        }} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {remove})(AddedFeature);
