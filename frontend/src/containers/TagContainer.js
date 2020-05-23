import React from 'react';
import { connect } from 'react-redux';
import Tag from '../components/Tag';
import { selectTags, unselectTags } from '../modules/tag'

const TagContainer = ({ selectedTags,selectTags,unselectTags }) => {
    return(
        <Tag selectedTags={selectedTags} selectTags={selectTags} unselectTags={unselectTags}/>
    );
};

export default connect(
    state => ({
        selectedTags: state.tag.selectedTags
    }),
    {
        selectTags,
        unselectTags
    }
)(TagContainer);