import { BankActionType, CommentActionType } from "../actionTypes";

import { Comment } from "../reducers/commentReducer";

interface DepositAction {
  type: BankActionType.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: BankActionType.WITHDRAW;
  payload: number;
}

interface BankruptAction {
  type: BankActionType.BANKRUPT;
}

interface GetCommentsPendingAction {
  type: CommentActionType.GET_POST_COMMENTS_PENDING;
}

interface GetCommentsSuccessAction {
  type: CommentActionType.GET_POST_COMMENTS_SUCCESS;
  payload: Comment[];
}

interface GetCommentsFailAction {
  type: CommentActionType.GET_POST_COMMENTS_FAIL;
  payload: string;
}

export type BankAction = DepositAction | WithdrawAction | BankruptAction;

export type GetCommentsAction =
  | GetCommentsPendingAction
  | GetCommentsSuccessAction
  | GetCommentsFailAction;
