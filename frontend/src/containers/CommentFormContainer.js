import { connect } from 'react-redux'
import CommentForm from '../components/CommentForm'
import { sendAddComment } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    postId: ownProps.postId
})

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch(sendAddComment(comment))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentForm)