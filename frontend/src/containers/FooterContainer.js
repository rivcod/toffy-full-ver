import React from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { selectLang } from '../modules/footer'


const FooterContainer = ({ selectedLang, selectLang }) => {
    return(
        <Footer selectedLang={selectedLang} selectLang={selectLang}/>
    );
};

export default connect(
    state => ({
        selectedLang: state.footer.selectedLang,
    }),
    {
        selectLang,
    }
)(FooterContainer);