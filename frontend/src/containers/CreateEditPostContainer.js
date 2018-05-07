import { connect } from 'react-redux'
import { sendAddPost, sendEditPost } from '../actions'
import CreateEditPost from '../components/CreateEditPost';
import { withRouter } from 'react-router'

const mapStateToProps = (state, ownProps) => ({
    categories : state.categories,
    post : ownProps.post,
    isEditing : ownProps.isEditing
})

const mapDispatchToProps = dispatch => ({
    sendAddPost : post => dispatch(sendAddPost(post)),
    sendEditPost : post => dispatch(sendEditPost(post))
}) 

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEditPost))