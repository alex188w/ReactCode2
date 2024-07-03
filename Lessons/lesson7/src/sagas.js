import { call, put, takeLatest, delay } from 'redux-saga/effects';

function* onAddMessageWithSaga(action) {
    yield put(action);
    if (action.message.author !== '') {
        const botMessage = 'Данные загружены';
        yield delay(2000);
        yield put(botMessage);
    }
}
function* mySaga() {
    yield takeLatest("MESSAGES::ADD_MESSAGE_WITH_SAGA", onAddMessageWithSaga);
    // yield takeLatest("MESSAGES::ADD_MESSAGE_WITH_SAGA");
}
export default mySaga;