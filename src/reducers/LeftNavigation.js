import * as types from '../actions/ActionConfig'
import produce from 'immer'

const initialState = {
  editing: false,

  clickedIndices: {},

  items: [
    {
      id: 1,
      title: "item1",
      editing: false,
    },
    {
      id: 2,
      title: "item2",
      editing: false,
    },
    {
      id: 3,
      title: "item3",
      editing: false,
    }
  ]
}
function leftNavigation(state = initialState, action) {
  const { items } = state;

  switch (action.type) {
    case types.CLICK:
      return produce(state, draftState => {
        if (!draftState.clickedIndices[action.id]) {
          draftState.clickedIndices = {}
          draftState.clickedIndices[action.id] = true
        }
      })
    case types.CREATE:
      return produce(state, draftState => {
        const newId = items.reduce((prev, next) => {
          return prev.id > next.id ? prev : next
        }).id + 1

        draftState.items.push({
          id: newId,
          title: "newItem" + newId,
        })
      })
    case types.REMOVE:
      return produce(state, draftState => {
        draftState.items = items.filter(item => item.id !== action.index)
      });
    case types.MODIFY:
      return produce(state, draftState => {
        draftState.items[action.index].editing = true
      })
    case types.SAVE:
      return produce(state, draftState => {
        draftState.items[action.index].editing = false
      })
    case types.NAV_MODE_CHANGE:
      return produce(state, draftState => {
        draftState.editing = !draftState.editing
      })
    case types.CHANGE_TITLE:
      console.log(action.title)
      return produce(state, draftState => {
        draftState.items[action.index].title = action.title
      })
    default:
      return state
  }
}

export default leftNavigation