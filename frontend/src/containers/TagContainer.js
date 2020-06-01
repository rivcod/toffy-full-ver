import React from 'react';
import { connect } from 'react-redux';
import Tag from '../components/Tag';
import { selectTags, unselectTags } from '../modules/tag'
import { setCurrentPage} from '../modules/pagination'


const TagContainer = ({ selectedTags,selectedColors,selectTags,unselectTags,setCurrentPage,selectedLang }) => {
    return(
        <Tag selectedTags={selectedTags} selectedColors={selectedColors} selectTags={selectTags} unselectTags={unselectTags} setCurrentPage={setCurrentPage} selectedLang={selectedLang}/>
    );
};

export default connect(
    state => ({
        selectedTags: state.tag.selectedTags,
        selectedColors: state.tag.selectedColors,
        selectedLang: state.footer.selectedLang,
    }),
    {
        selectTags,
        unselectTags,
        setCurrentPage
    }
)(TagContainer);