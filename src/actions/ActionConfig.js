export const CLICK = 'ClICK'

export const REMOVE = 'REMOVE'

export const CREATE = 'CREATE'

export const MODIFY = 'MODIFY'

export const NAV_MODE_CHANGE = 'EDIT_MODE_CHANGE'

export const SAVE = 'SAVE'

export const CHANGE_TITLE = 'CHANGE_TITLE'

export const click = (id) => ({
  type: CLICK,
  id
});

export const create = () => ({
  type: CREATE
});

export const remove = (index) => ({
  type: REMOVE,
  index
});

export const modify = (index) => ({
  type: MODIFY,
  index
});

export const changeTitle = (index, title) => ({
  type: CHANGE_TITLE,
  index,
  title
})

export const editModeChange = () => ({
  type: NAV_MODE_CHANGE
});

export const save = (index, title) => ({
  type: SAVE,
  index,
  title
})
