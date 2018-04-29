import { connect } from 'react-redux'
import VotingWidget from '../components/VotingWidget'
import { sendUpvoteComment, sendDownvoteComment } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    entity : ownProps.entity
})

const mapDispatchToProps = dispatch => ({
    upvoteEntity: entity => dispatch(sendUpvoteComment(entity)),
    downvoteEntity: entity => dispatch(sendDownvoteComment(entity))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VotingWidget)