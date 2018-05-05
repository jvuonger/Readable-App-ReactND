import React from 'react'

const CommentEditWidget = ({openCommentEditForm, deleteEntity, comment}) => (
    <p>
        ( 
            <button onClick={() => openCommentEditForm(comment)}>Edit</button> 
        ) | ( 
            <button onClick={() => deleteEntity(comment)}>Delete</button> 
        )
    </p>
)

export default CommentEditWidget