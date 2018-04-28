import { connect } from 'react-redux'
import VotingWidget from '../components/VotingWidget'
import { sendUpvotePost, sendDownvotePost } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    entity : ownProps.entity
})

const mapDispatchToProps = dispatch => ({
    upvotePost: entity => dispatch(sendUpvotePost(entity)),
    downvotePost: entity => dispatch(sendDownvotePost(entity))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VotingWidget)