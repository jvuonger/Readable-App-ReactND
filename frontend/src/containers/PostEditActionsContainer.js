import { connect } from 'react-redux'
import PostEditWidget from '../components/PostEditWidget'
import { sendEditPost, sendDeletePost } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    entity : ownProps.entity
})

const mapDispatchToProps = dispatch => ({
    editEntity: entity => dispatch(sendEditPost(entity)),
    deleteEntity: entity => dispatch(sendDeletePost(entity))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostEditWidget)