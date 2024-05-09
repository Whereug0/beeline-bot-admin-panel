import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setCredentials } from "../auth/authSlice";
import { BASE_URL } from "../../utils/constants";



const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, {getState}) => {
    const token = getState().auth.token
    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
    return headers
  }
})


const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if(result?.error?.originalStatus === 403) {
    console.log('отправка токена обновления')

    const refreshResult = await baseQuery('/accounts/refresh/', api, extraOptions)
    console.log(refreshResult)
    if(refreshResult?.data) {
      const user = api.getState().auth.user

      api.dispatch(setCredentials({...refreshResult.data, user}))

      result = await baseQuery(args, api, extraOptions)
    }else {
      api.dispatch(logout())
    }
  }
  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getMessage: builder.query({
      query: () => "/main/message/", // Путь к эндпоинту для получения сообщений
    }),
  }),
})


export const { useGetMessageQuery } = apiSlice;