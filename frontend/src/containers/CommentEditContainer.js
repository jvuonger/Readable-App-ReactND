import { connect } from 'react-redux'
import EditWidget from '../components/EditWidget'
import { sendEditComment, sendDeleteComment } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    entity : ownProps.entity
})

const mapDispatchToProps = dispatch => ({
    editEntity: entity => dispatch(sendEditComment(entity)),
    deleteEntity: entity => dispatch(sendDeleteComment(entity))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditWidget)