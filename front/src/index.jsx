import ReactDOM from "react-dom";
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Provider } from "react-redux";
import { createStore } from "redux";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import CalendarBoard from "./components/CalendarBoard/container";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";

dayjs.locale("ja");

const store = createStore(rootReducer);

//4-5まで完了（ただし、DatePickerのmonthが英語表記）
//5-1まで完了（ただしreduxのフローまでのため、表示確認は5-2で実施）

const App = () => {
  return(
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      </MuiPickersUtilsProvider>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));