import { connect } from 'react-redux'
import CommentEditWidget from '../components/CommentEditWidget'
import { openCommentEditForm, sendEditComment, sendDeleteComment } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    entity : ownProps.entity,
    isEditing : ownProps.isEditing
})

const mapDispatchToProps = dispatch => ({
    openCommentEditForm: comment => dispatch(openCommentEditForm(comment)),
    editEntity: entity => dispatch(sendEditComment(entity)),
    deleteEntity: entity => dispatch(sendDeleteComment(entity))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentEditWidget)