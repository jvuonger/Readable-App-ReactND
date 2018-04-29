import { connect } from 'react-redux'
import PostDetail from '../components/PostDetail'
import { fetchPost } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    post: state.posts.post
})

const mapDispatchToProps = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetail)