import { connect } from 'react-redux'
import { fetchCategories } from '../actions'
import App from '../components/App'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => ({
    categories: state.categories
})

export default withRouter(connect(
    mapStateToProps,
    {fetchCategories}
)(App))