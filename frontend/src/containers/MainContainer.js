import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';

const MainContainer = ({ selectedLang }) => {
    return(
        <Main selectedLang={selectedLang}/>
    );
};

export default connect(
    state => ({
        tags: state.main.tags,
        selectedLang: state.footer.selectedLang,
    }),
    {
    }
)(MainContainer);