import constants from './constants';
import {combineReducers} from 'redux';
import update from 'react-addons-update';

const initialState = {
    balance: 0,
    initialUI:{
        showExchange:true
    }
}

const balanceReducer = (state=initialState.balance, action) => {
   // console.log(action);

    switch (action.type){
        case constants.DEPOSIT_INTO_ACCOUNT:
            return {balance:state.balance+parseFloat(action.amount)};
        case constants.WITHDRAW_FROM_ACCOUNT:
            return {balance: state.balance-parseFloat(action.amount)};
        default:
            return state;
    }
}

const uiReducer = (state=initialState.initialUI,action)=>{
    switch (action.type){
        case constants.TOGGLE_INFO:
            return update(state,{showExchange:{
                $apply: currentState=>!currentState
            }});
        default:
            return state;
    }
};

const bankReducer = combineReducers({balance:balanceReducer,ui:uiReducer});

export default bankReducer;