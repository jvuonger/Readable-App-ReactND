import React from 'react'

const VotingWidget = ({upvotePost, downvotePost, entity}) => (
    <p>
        {entity.voteScore} Votes ( 
            <a href="#" onClick={() => upvotePost(entity)}>Upvote</a> 
        ) | ( 
            <a href="#" onClick={() => downvotePost(entity)}>Downvote</a> 
        )
    </p>
)

export default VotingWidget