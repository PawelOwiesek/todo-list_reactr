import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTask";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Something went wrong");
  }
}

export function* watchFetchExampleTasks() {
  console.log("saga jest podlaczona");
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
