import React from 'react'
import PropTypes from 'prop-types'

import './LeftNavigation.scss'
const LeftNavigation = ({ items, onClick, onRemove, onCreate }) => {

  var itemList = items.map(
    (item, i) =>
      <li
        className={item.clicked ? 'clicked' : ''}
        key={item.id}
        onClick={() => onClick(i)}>
        {item.title}
      </li>
  )
  return (
    <div className='LeftNavigation'>
      <div className='editor'>
        <p
          onClick={() => onCreate()}>추가</p>
      </div>
      <ul>
        {itemList}
      </ul>
    </div>
  )
}

LeftNavigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  })),
  onClick: PropTypes.func,
  onCreate: PropTypes.func,
  onRemove: PropTypes.func
}

LeftNavigation.defaultProps = {
  items: [],
  onClick: () => console.warn('onClick is not defined in LeftNavigation'),
  onRemove: () => console.warn('onRemove is not defined in LeftNavigation'),
  onCreate: () => console.warn('onCreate is not defined in LeftNavigation')
}

export default LeftNavigation
