export const setSortFilter = filter => ({
    type : "SET_SORT_FILTER",
    filter
})

export const SortFilters = {
    VOTES_DESCENDING: 'VOTES_DESCENDING',
    VOTES_ASCENDING: 'VOTES_ASCENDING',
    DATE_DESCENDING: 'DATE_DESCENDING',
    DATE_ASCENDING: 'DATE_ASCENDING'
}