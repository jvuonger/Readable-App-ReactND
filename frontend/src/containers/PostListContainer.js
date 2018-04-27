import { connect } from 'react-redux'
import PostList from '../components/PostList'
import { setSortFilter, fetchPosts } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    sortFilter: state.sortFilter,
    posts: state.posts,
    filterCategory: ownProps.filterCategory
})

const mapDispatchToProps = dispatch => ({
    setSortFilter: filter => dispatch(setSortFilter(filter)),
    fetchPosts: category => dispatch(fetchPosts(category))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)