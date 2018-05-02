import { connect } from 'react-redux'
import { fetchCategories } from '../actions'
import App from '../components/App'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories
})

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
}) 

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))