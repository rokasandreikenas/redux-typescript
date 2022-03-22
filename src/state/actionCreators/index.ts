import { BankAction, GetCommentsAction } from "../actions";
import { BankActionType, CommentActionType } from "../actionTypes";

import { Dispatch } from "redux";
import axios from "axios";
import { getErrorMessage } from "../../utils/error";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionType.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankrupt = () => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionType.BANKRUPT,
    });
  };
};

export const getComments = (postId: string) => {
  return async (dispatch: Dispatch<GetCommentsAction>) => {
    dispatch({
      type: CommentActionType.GET_POST_COMMENTS_PENDING,
    });

    try {
      const baseUrl = "https://jsonplaceholder.typicode.com/";
      const url = `${baseUrl}comments?postId=${postId}`;
      const { data } = await axios.get(url);

      dispatch({
        type: CommentActionType.GET_POST_COMMENTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CommentActionType.GET_POST_COMMENTS_FAIL,
        payload: getErrorMessage(error),
      });
    }
  };
};
