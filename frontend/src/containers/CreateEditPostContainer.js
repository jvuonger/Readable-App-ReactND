import { connect } from 'react-redux'
import { sendAddPost, sendEditPost } from '../actions'
import CreateEditPost from '../components/CreateEditPost';

const mapStateToProps = (state, ownProps) => ({
    categories : state.categories,
    post : ownProps.post
})

const mapDispatchToProps = dispatch => ({
    sendAddPost : post => dispatch(sendAddPost(post)),
    sendEditPost : post => dispatch(sendEditPost(post))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEditPost)