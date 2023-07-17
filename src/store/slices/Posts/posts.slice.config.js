export const initialState = {
  amount: {
    value: 0,
    status: 'idle'
  },
  pagination: {
    start: 0,
    step: 10,
    lastActivePage: 1,
  },
  trident: {
    active: {
      id: null,
      title: null
    },
    next: {
      id: null,
      title: null
    },
    prev: {
      id: null,
      title: null
    }
  },
  session: {
    lastVisited: []
  },
  filter: {
    searchQuery: ''
  }
}