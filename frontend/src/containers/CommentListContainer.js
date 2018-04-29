import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import { fetchComments } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    comments: state.comments,
    postId: ownProps.postId
})

const mapDispatchToProps = dispatch => ({
    fetchComments: postId => dispatch(fetchComments(postId))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList)