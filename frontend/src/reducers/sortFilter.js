import { SortFilters } from '../actions'

const sortFilter = (state = SortFilters.DATE_DESCENDING, action) => {
  switch (action.type) {
    case 'SET_SORT_FILTER':
      return action.filter
    default:
      return state
  }
}

export default sortFilter
