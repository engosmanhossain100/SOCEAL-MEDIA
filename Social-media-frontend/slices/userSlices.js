import { createSlice } from '@reduxjs/toolkit'

export const userSlices = createSlice({

  name: 'user',

  initialState: {
    value: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
  },

  reducers: {

    loggedInUsers : (state,action) => { 
      state.userInfo = action.payload;
    },

    loggOutUsers : (state) => { 
      state.userInfo = null
    },

  },
  
})

export const { loggedInUsers, loggOutUsers } = userSlices.actions

export default userSlices.reducer
