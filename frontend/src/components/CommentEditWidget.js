import React from 'react'

const CommentEditWidget = ({openCommentEditForm, closeCommentEditForm, deleteEntity, comment, isEditing}) => (
    <p>
            { !isEditing && <button className="pure-button" onClick={() => openCommentEditForm(comment)}>Edit</button> }
            { isEditing && <button className="pure-button" onClick={() => closeCommentEditForm(comment)}>Cancel</button>}
        | 
            <button className="pure-button" onClick={() => deleteEntity(comment)}>Delete</button> 

    </p>
)

export default CommentEditWidget