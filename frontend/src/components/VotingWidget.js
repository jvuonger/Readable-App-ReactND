import React from 'react'

const VotingWidget = ({upvoteEntity, downvoteEntity, entity}) => (
    <p>
        {entity.voteScore} Votes ( 
            <a href="#" onClick={() => upvoteEntity(entity)}>Upvote</a> 
        ) | ( 
            <a href="#" onClick={() => downvoteEntity(entity)}>Downvote</a> 
        )
    </p>
)

export default VotingWidget