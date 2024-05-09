
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";
import { apiSlice, globalToken } from "../api/apiSlice";

const token = ""

export const fetchMessages = createAsyncThunk(
  'message',
  async (_, thunkAPI) => {
    try {
        // Запрос к эндпоинту для получения сообщений
        const response = await axios.get(`${BASE_URL}/main/message`, {
          headers: 
          {"Authorization" : `Bearer ${token}`}
        });
        // const response = "response lll"
        console.log(response.data)
        return response
    } catch (e) {
        console.log('trololo')
        return thunkAPI.rejectWithValue("Не удалось загрузить сообщения")

    }
}
)


// export const fetchMessages = apiSlice.injectEndpoints({
//   endpoints: builder => ({
//       getMessage: builder.query({
//           query: () => '/main/message/',
//           keepUnusedDataFor: 5,
//       })
//   })
// })

// export const {
//   useGetMessageQuery
// } = fetchMessages