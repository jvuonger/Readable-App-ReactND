import { format } from 'date-fns'
export const formatTimestamp = timestamp => format(new Date(timestamp), 'MM/DD/YYYY')