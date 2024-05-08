
import { createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchMessages = () => async () => {
//   const dispatch = useDispatch()

//   try{
//     dispatch(messagesSlice.actions.messagesFetching())
//     const response = await axios.get(`${BASE_URL}/main/message`)
//     dispatch(messagesSlice.actions.messagesFetchingSuccess(response.data))

//   }catch(e) {
//     dispatch(messagesSlice.actions.messagesFetchingError(e.message))
//   }
// }


export const fetchMessages = createAsyncThunk(
  'messages',
  async (_, thunkAPI) => {
    try {
        // Запрос к эндпоинту для получения сообщений
        const response = await thunkAPI.extra.baseQuery('/main/message');
        console.log(response)
        return response
    } catch (e) {
        return thunkAPI.rejectWithValue("Не удалось загрузить сообщения")
    }
}
)