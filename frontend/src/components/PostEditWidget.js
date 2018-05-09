import React from 'react'
import { Link } from 'react-router-dom'

const PostEditWidget = ({editEntity, deleteEntity, entity}) => (
    <p>
        <Link to={`/post/${entity.id}/edit`}>Edit</Link> | 
        <Link to="#" onClick={() => deleteEntity(entity)}>Delete</Link> 
    </p>
)

export default PostEditWidget