import { connect } from 'react-redux'
import PostDetail from '../components/PostDetail'
import { fetchPost, sendDeletePost } from '../actions'
import { withRouter } from 'react-router'

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.posts.isFetching,
    post: state.posts.post,
    postAction : ownProps.action
})

const mapDispatchToProps = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    deletePost: post => dispatch(sendDeletePost(post))
}) 

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetail))