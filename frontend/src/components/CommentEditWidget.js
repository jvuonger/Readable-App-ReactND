import React from 'react'

const CommentEditWidget = ({openCommentEditForm, closeCommentEditForm, deleteEntity, comment, isEditing}) => (
    <p>
        ( 
            { !isEditing && <button onClick={() => openCommentEditForm(comment)}>Edit</button> }
            { isEditing && <button onClick={() => closeCommentEditForm(comment)}>Cancel</button>}
        ) | ( 
            <button onClick={() => deleteEntity(comment)}>Delete</button> 
        )
    </p>
)

export default CommentEditWidget