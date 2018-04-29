import React from 'react'

const EditWidget = ({editEntity, deleteEntity, entity}) => (
    <p>
        ( 
            <a href="#" onClick={() => editEntity(entity)}>Edit</a> 
        ) | ( 
            <a href="#" onClick={() => deleteEntity(entity)}>Delete</a> 
        )
    </p>
)

export default EditWidget