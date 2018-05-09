import { connect } from 'react-redux'
import PostDetail from '../components/PostDetail'
import { fetchPost, sendDeletePost } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    post: state.posts.post,
    postAction : ownProps.action
})

const mapDispatchToProps = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    deletePost: post => dispatch(sendDeletePost(post))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetail)