import React from 'react';
import { connect } from 'react-redux';
import { eat, play, nap } from '../redux/actions';

const Activity = ({ activity, eat, play, nap }) => (
    <>
        <h1>The cat is {activity}.</h1>
        <button onClick={() => eat ()}>Eating</button>
        <button onClick={() => play ()}>Playing</button>
        <button onClick={() => nap ()}>Napping</button>
    </>
);

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

export default connect(
    mapStateToProps, // what do i want?
    { eat, play, nap } // mapDispatchToProps- what do i want to do?
    )(Activity);

