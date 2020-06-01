import React from 'react';
import { connect } from 'react-redux';
import Tag from '../components/Tag';
import { selectTags, unselectTags } from '../modules/tag'
import { setCurrentPage} from '../modules/pagination'


const TagContainer = ({ selectedTags,selectedColors,selectTags,unselectTags,setCurrentPage }) => {
    return(
        <Tag selectedTags={selectedTags} selectedColors={selectedColors} selectTags={selectTags} unselectTags={unselectTags} setCurrentPage={setCurrentPage}/>
    );
};

export default connect(
    state => ({
        selectedTags: state.tag.selectedTags,
        selectedColors: state.tag.selectedColors
    }),
    {
        selectTags,
        unselectTags,
        setCurrentPage
    }
)(TagContainer);