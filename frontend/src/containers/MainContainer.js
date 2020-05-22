import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { addTags } from '../modules/main'

const MainContainer = ({ addTags }) => {
    return(
        <Main onAddTags={addTags}/>
    );
};


export default connect(
    state => ({
    }),
    {
        addTags,
    }
)(MainContainer);