import { useReducer } from 'react';
const INCREASE = 'counter/increase';
const DECREASE = 'counter/decrease';

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });

function reduce(state, action) {
  switch (action.type) {
    case INCREASE: // 증가 액션
    case DECREASE: // 감소 액션
  }
}

const Counter = () => {};

export default Counter;
