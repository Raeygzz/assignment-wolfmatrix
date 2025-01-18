import { createAsyncThunk, SerializedError, createSlice } from "@reduxjs/toolkit";

import { ListResponse } from "../models";

import { Api } from "@/services/api";
import { AppConstants } from "@/constants";

export const fetchList = createAsyncThunk<ListResponse[], void>("list/fetchList", async (_, api) => {
  const response = await Api.get<ListResponse[]>(AppConstants.ApiKeys.list.fetchList, {
    params: {
      _limit: AppConstants.Config.Pagination.pageSize,
    },
  });

  const { data, status } = response;

  if (status !== 200) {
    throw new Error("Something went wrong!");
  }

  let arrangedData = data.map((item) => {
    item.selected = false;
    return item;
  });

  return arrangedData;
});

interface List {
  isLoading: boolean;
  data: ListResponse[];
  selectedData: ListResponse[];
  isSuccess?: boolean;
  error?: SerializedError;
}

interface ListSliceState {
  fetchList: List;
}

const initialState: ListSliceState = {
  fetchList: {
    isLoading: false,
    data: [],
    selectedData: [],
    isSuccess: false,
    error: undefined,
  },
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setSelectedItem: (state, { payload }) => {
      if (state.fetchList.selectedData.find((obj) => obj.id === payload.id)) {
        state.fetchList.selectedData = state.fetchList.selectedData.filter((obj) => obj.id !== payload.id);
        return;
      }

      state.fetchList.selectedData = [...state.fetchList.selectedData, { ...payload, selected: true }];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.fetchList.isLoading = true;
        state.fetchList.isSuccess = false;
      })
      .addCase(fetchList.fulfilled, (state, { payload }) => {
        state.fetchList.isLoading = false;
        state.fetchList.data = payload;
        state.fetchList.isSuccess = true;
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.fetchList.isLoading = false;
        state.fetchList.isSuccess = false;
        state.fetchList.error = action.error;
      });
  },
});

export const { setSelectedItem } = listSlice.actions;

export default listSlice.reducer;
