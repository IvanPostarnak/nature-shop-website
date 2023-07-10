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
      title: null,
      entries: {}
    },
    next: {
      id: null,
      title: null,
      entries: {}
    },
    prev: {
      id: null,
      title: null,
      entries: {}
    }
  },
  session: {
    lastVisited: []
  }
}