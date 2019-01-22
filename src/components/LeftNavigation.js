import React from "react";
import PropTypes from "prop-types";

import "./LeftNavigation.scss";

const LeftNavigation = ({
  state,
  onClick,
  onRemove,
  onCreate,
  onEditModeChange,
  onModify,
  onSave,
  onChangeTitle
}) => {
  const clickedIndices = state.clickedIndices;
  const editing = state.editing;
  const itemList = state.items.map((item, i) =>
    editing ? (
      <li
        className={clickedIndices[item.id] ? "clicked" : ""}
        key={item.id}
        onClick={() => onClick(item.id)}
      >
        {item.editing ? (
          <input
            name="title"
            value={item.title}
            placeholder="입력해주세요"
            onChange={event => {
              onChangeTitle(i, event.target.value);
            }}
          />
        ) : (
          item.title
        )}
        {item.editing ? (
          <div className="editor">
            <div
              onClick={event => {
                event.stopPropagation();
                onSave(i);
              }}
            >
              저장
            </div>
          </div>
        ) : (
          <div className="editor">
            <div
              onClick={event => {
                event.stopPropagation();
                onModify(i);
              }}
            >
              수정
            </div>
            <div
              onClick={event => {
                event.stopPropagation();
                onRemove(item.id);
              }}
            >
              삭제
            </div>
          </div>
        )}
      </li>
    ) : (
      <li
        className={clickedIndices[item.id] ? "clicked" : ""}
        key={item.id}
        onClick={() => onClick(item.id)}
      >
        {item.title}
      </li>
    )
  );

  return (
    <div className="LeftNavigation">
      <div className="editor">
        {state.editing ? (
          <div>
            <p onClick={() => onEditModeChange()}>X</p>
            <p onClick={() => onCreate()}>추가</p>
          </div>
        ) : (
          <p className="edit" onClick={() => onEditModeChange()}>
            편집
          </p>
        )}
      </div>
      <ul>{itemList}</ul>
    </div>
  );
};

LeftNavigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    })
  ),
  clickedIndices: PropTypes.objectOf(PropTypes.bool),
  onClick: PropTypes.func,
  onCreate: PropTypes.func,
  onRemove: PropTypes.func,
  onModify: PropTypes.func,
  onEditModeChange: PropTypes.func
};

LeftNavigation.defaultProps = {
  items: [],
  clickedIndices: {},
  onClick: () => console.warn("onClick is not defined in LeftNavigation"),
  onRemove: () => console.warn("onRemove is not defined in LeftNavigation"),
  onCreate: () => console.warn("onCreate is not defined in LeftNavigation"),
  onModify: () => console.warn("onModify is not defind in LeftNavigation"),
  onSave: () => console.warn("onSave is not defined in LevtNavigation"),
  onEditModeChange: () =>
    console.warn("onEditingModeChange is not defined in LeftNavigaiton"),
  onChangeTitle: () =>
    console.warn("onChangeTitle is not defined in LeftNavigation")
};

export default LeftNavigation;
