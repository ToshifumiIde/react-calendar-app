//constants
export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";
export const SCHEDULES_FETCH_ITEM = "SCHEDULES_FETCH_ITEM";
export const SCHEDULES_SET_LOADING = "SCHEDULES_SET_LOADING";
export const SCHEDULES_DELETE_ITEM = "SCHEDULES_DELETE_ITEM";

export const SCHEDULE_ASYNC_FAILURE = "SCHEDULE_ASYNC_FAILURE";
export const SCHEDULE_RESET_ERROR = "SCHEDULE_RESET_ERROR";


//actions
//Item追加
export const schedulesAddItem = payload => ({
  type:SCHEDULES_ADD_ITEM,
  payload
});
//ロード後に取得したデータを読み込む
export const schedulesFetchItem = payload => ({
  type:SCHEDULES_FETCH_ITEM,
  payload
});

//リクエスト送信前にローディング状態にする
export const schedulesSetLoading = () => ({
  type:SCHEDULES_SET_LOADING
});

//スケジュールを削除する
export const schedulesDeleteItem = payload =>({
  type:SCHEDULES_DELETE_ITEM,
  payload
});

//エラーを返す
export const schedulesAsyncFailure = error =>({
  type:SCHEDULES_ASYNC_FAILURE,
  error
});

export const schedulesResetError = () =>({
  type:SCHEDULE_RESET_ERROR,
});