import { connect } from 'react-redux'
import PostEditWidget from '../components/PostEditWidget'
import { sendDeletePost } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    entity : ownProps.entity
})

const mapDispatchToProps = dispatch => ({
    deleteEntity: entity => dispatch(sendDeletePost(entity))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostEditWidget)