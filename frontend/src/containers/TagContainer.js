import React from 'react';
import { connect } from 'react-redux';
import Tag from '../components/Tag';
import { selectTags, unselectTags } from '../modules/tag'

const TagContainer = ({ selectedTags,selectedColors,selectTags,unselectTags }) => {
    return(
        <Tag selectedTags={selectedTags} selectedColors={selectedColors} selectTags={selectTags} unselectTags={unselectTags}/>
    );
};

export default connect(
    state => ({
        selectedTags: state.tag.selectedTags,
        selectedColors: state.tag.selectedColors
    }),
    {
        selectTags,
        unselectTags
    }
)(TagContainer);