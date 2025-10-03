import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const PageRefreshSlice = createSlice({
    name : "PageRefreshSlice",
    initialState : {
        val : 0
    },
    reducers : {
        updateState: (state, action) => {
            state.val += action.payload
        }
    }
  })

export const { updateState } = PageRefreshSlice.actions;
export default PageRefreshSlice.reducer;
