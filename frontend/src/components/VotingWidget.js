import React from 'react'
import { Link } from 'react-router-dom'

const VotingWidget = ({upvoteEntity, downvoteEntity, entity}) => (
    <p>
        {entity.voteScore} Votes ( 
            <Link to="#" onClick={() => upvoteEntity(entity)}>Upvote</Link> 
        ) | ( 
            <Link to="#" onClick={() => downvoteEntity(entity)}>Downvote</Link> 
        )
    </p>
)

export default VotingWidget