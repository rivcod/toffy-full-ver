import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { addTags } from '../modules/main'

const MainContainer = ({ tags,addTags }) => {
    return(
        <Main checkTags={tags} onAddTags={addTags}/>
    );
};

export default connect(
    state => ({
        tags: state.main.tags
    }),
    {
        addTags,
    }
)(MainContainer);