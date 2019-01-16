import * as types from '../actions/ActionConfig'

const initialState = [
  {
    id: 1,
    title: "item1",
    clicked: true
  },
  {
    id: 2,
    title: "item2",
    clicked: false
  },
  {
    id: 3,
    title: "item3",
    clicked: false
  }
]
function leftNavigation(state = initialState, action) {
  const items = state;

  switch (action.type) {
    case types.CLICK:
      return [
        ...items.slice(0, action.index).map( (item, i) =>  (
          {
            ...item,
            clicked: false
          }
        )),
        {
          ...items[action.index],
          clicked: true
        },
        ...items.slice(action.index + 1, items.length).map((item, i) => (
          {
            ...item,
            clicked: false
          }
        ))
      ]

    case types.CREATE:
      return [
        ...items,
        {
          id: items[items.length - 1].id + 1,
          title: "추가할게욥",
          clicked: false
        }
      ]
    case types.REMOVE:
      return items.filter((
        (item) => item.clicked == false
      ))
    default:
      return state
  }
}

export default leftNavigation