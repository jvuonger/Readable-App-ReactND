import { connect } from 'react-redux'
import VotingWidget from '../components/VotingWidget'
import { sendUpvotePost, sendDownvotePost } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    entity : ownProps.entity
})

const mapDispatchToProps = dispatch => ({
    upvoteEntity: entity => dispatch(sendUpvotePost(entity)),
    downvoteEntity: entity => dispatch(sendDownvotePost(entity))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VotingWidget)