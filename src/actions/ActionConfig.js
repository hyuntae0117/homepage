export const CLICK = 'ClICK'

export const REMOVE = 'REMOVE'

export const CREATE = 'CREATE'

export const click = (index) => ({
  type: CLICK,
  index
});

export const create = () => ({
  type: CREATE
});

export const remove = (index) => ({
  type: REMOVE,
  index
});