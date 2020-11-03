import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";
import { 
  addScheduleCloseDialog,
  addScheduleSetValue
} from "../../redux/addSchedule/actions";
import { schedulesAddItem } from "../../redux/schedules/actions";


//reduxでdialogの状態管理を切り替え(scheduleだけ受け取る)
const mapStateToProps = state =>({ schedule:state.addSchedule });


//dialogを閉じるためのメソッド
const mapDispatchToProps = dispatch =>({
  setSchedule:value =>{
    dispatch(addScheduleSetValue(value))
  },
  closeDialog:()=> {
    dispatch(addScheduleCloseDialog());
  },
  saveSchedule:schedule => {
    dispatch(schedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  }
});

const mergeProps = (stateProps , dispatchProps) =>({
  ...stateProps,
  ...dispatchProps,
  saveSchedule:()=> {
    const {
      schedule:{form:schedule}
    } = stateProps;
    dispatchProps.saveSchedule(schedule);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);