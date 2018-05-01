import React from 'react'

const EditWidget = ({editEntity, deleteEntity, entity}) => (
    <p>
        ( 
            <button onClick={() => editEntity(entity)}>Edit</button> 
        ) | ( 
            <button onClick={() => deleteEntity(entity)}>Delete</button> 
        )
    </p>
)

export default EditWidget