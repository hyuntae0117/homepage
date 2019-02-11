import * as types from "../actions/Board";

const initialState = {
  items: [
    {
      title: "타이틀이야",
      alt: "이미지텍스트",
      text: "텍스트텍스트",
      imgUrl:
        "https://cdn.univ20.com/wp-content/uploads/2015/08/2cf4b257e283227947f13e898e471fec.jpg"
    }
  ]
};

function board(state = initialState, action) {
  return state;
}

export default board;
