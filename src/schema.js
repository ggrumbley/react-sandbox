import data from './dataStore'

export default [
  {
    id: 'name',
    label: 'Name',
    show: true,
    sample: 'Lagavulin 12',
    align: 'left'
  },
  {
    id: 'year',
    label: 'Date Tasted',
    type: 'year',
    show: true,
    sample: 2017
  },
  {
    id: 'class',
    label: 'Class',
    type: 'suggest',
    options: data.class,
    show: true,
    sample: 'Scotch - Islay',
    align: 'left'
  },
  {
    id: 'rating',
    label: 'Rating',
    type: 'rating',
    show: true,
    sample: 3
  },
  {
    id: 'comments',
    label: 'Comments',
    type: 'text',
    sample: 'Nice for the price'
  }
]
