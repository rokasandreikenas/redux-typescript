import { CommentActionType } from "../actionTypes";
import { GetCommentsAction } from "../actions";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentState {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentState = {
  comments: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action: GetCommentsAction) => {
  switch (action.type) {
    case CommentActionType.GET_POST_COMMENTS_PENDING:
      return { ...state, loading: true };
    case CommentActionType.GET_POST_COMMENTS_SUCCESS:
      return { ...state, loading: false, comments: action.payload };
    case CommentActionType.GET_POST_COMMENTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
