import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  // token: localStorage.getItem("token"),
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYyNjU5MjMxOSwiZXhwIjoxNjI2NTk5NTE5fQ.OnKETReVk43C25NawCihF4Q81-HxXGv8ccKEJ8pdEgY',
  name :"Merijn Kok",
  email :"Merijn@risottini.com",
  id :2,
  phone :null,
  createdAt :"2020-10-15T13:52:52.951Z",
  updatedAt :"2020-10-15T13:52:52.951Z",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
