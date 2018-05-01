import React from 'react'

const VotingWidget = ({upvoteEntity, downvoteEntity, entity}) => (
    <p>
        {entity.voteScore} Votes ( 
            <button onClick={() => upvoteEntity(entity)}>Upvote</button> 
        ) | ( 
            <button onClick={() => downvoteEntity(entity)}>Downvote</button> 
        )
    </p>
)

export default VotingWidget