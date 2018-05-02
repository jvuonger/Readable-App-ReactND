import { connect } from 'react-redux'
import { savePost } from '../actions'
import CreateEditPost from '../components/CreateEditPost';

const mapStateToProps = (state, ownProps) => ({
    categories : state.categories
})

const mapDispatchToProps = dispatch => ({
    savePost : post => dispatch(savePost(post))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEditPost)