import { BankAction } from "../actions";
import { BankActionType } from "../actionTypes";

interface BankState {
  amount: number;
  isLoading: boolean;
}

const initialState: BankState = {
  amount: 0,
  isLoading: false,
};

const reducer = (state = initialState, action: BankAction) => {
  switch (action.type) {
    case BankActionType.DEPOSIT:
      return { ...state, amount: state.amount + action.payload };
    case BankActionType.WITHDRAW:
      return { ...state, amount: state.amount - action.payload };
    case BankActionType.BANKRUPT:
      return { ...state, amount: 0 };
    default:
      return state;
  }
};

export default reducer;
