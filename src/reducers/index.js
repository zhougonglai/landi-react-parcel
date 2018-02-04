import * as constant from '../utils/constants';
import {combineReducers} from 'redux';

const initialCategories = {
  topics: [],
  posts: [],
  comments: []
};

const categories = (state = initialCategories, action) => {
  const {payload} = action;
  switch (action.type) {
    case constant.SET_CATEGORIES:
      return {...state, topics: payload};
    case constant.SET_POSTS:
      return {...state, posts: payload};
    case constant.SET_COMMENTS:
      return {...state, comments: payload};
    case constant.UPDATE_POST:
      return {...state, posts: state.posts.filter(post => post.id !== payload.id).concat([payload])};
    case constant.UPDATE_COMMENT:
      return {...state, comments: state.comments.filter(comment => comment.id !== payload.id).concat([payload])};
    default:
      return state;
  }
};

const counter = (state = {count:0}, action) => {
  switch (action.type) {
    case constant.INCREMENT:
      return {count: state.count+1};
    case constant.DECREMENT:
      return {count: state.count-1};
    default:
      return state;
  }
}

export default combineReducers({
  categories, counter
});