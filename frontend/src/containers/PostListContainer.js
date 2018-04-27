import { connect } from 'react-redux'
import PostList from '../components/PostList'
import { setSortFilter, fetchPosts } from '../actions'

const mapStateToProps = state => ({
    sortFilter: state.sortFilter,
    posts: state.posts
})

const mapDispatchToProps = dispatch => ({
    setSortFilter: filter => dispatch(setSortFilter(filter)),
    fetchPosts: category => dispatch(fetchPosts(category))
}) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)