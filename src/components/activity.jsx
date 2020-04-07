import React from 'react';
import { connect } from 'react-redux';
import { eat } from '../redux/actions';

const Activity = ({ eat }) => (
    <>
        <h1>Activity Component</h1>
        <button onClick={() => eat ()}>Eating</button>
    </>
);

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

export default connect(
    mapStateToProps, // what do i want?
    { eat } // mapDispatchToProps- what do i want to do?
    )(Activity);

