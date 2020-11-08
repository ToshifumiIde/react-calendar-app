import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { 
  createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");
import CalendarBoard from "./components/CalendarBoard/container";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";
import ErrorSnackbar from "./components/ErrorSnackbar/container";

//redux-thunkが普通のactionかthunkのactionなのか判断可能となる
const store = createStore( rootReducer , applyMiddleware(thunk) );

//dialogを閉じるときに入力途中の場合、confirmを表示させる
//Calendarアプリの完成

const App = () => {
  return(
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
      <ErrorSnackbar />
      </MuiPickersUtilsProvider>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));