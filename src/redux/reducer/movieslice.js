import { createSlice } from "@reduxjs/toolkit";
import {
  영화API패치,
  영화검색패치,
  영화디테일패치,
  영화목록패치,
} from "./action/movieaction";


const movieslice = createSlice({
  name: "movie",
  initialState: {
    인기영화: {},
    탑레영화: {},
    상영예정: {},
    로딩: false,
    목록로딩:true,
    에러: null,
    장르: {},
    디테일아이템: {},
    영화리뷰: {},
    추천영화: {},
    영화비디오: {},
    영화목록: {},
    필터영화목록:{},
    검색여부 : false,
    현재페이지: 1,
    토탈페이지:1,
    유저입력값:'',
    현재검색어:'',
    연도:[1990,2023]
  },
  reducers: {
    유저입력:(state,action)=>{
      state.유저입력값 = action.payload
      console.log(state.유저입력값)
    },
    유저검색:(state)=>{
      state.검색여부 = true
    },
    영화보기:(state)=>{
      state.검색여부 = false
    },
    검색어확정:(state,action)=>{
      state.현재검색어 = action.payload
    },
    인기순정렬:(state)=>{
      state.필터영화목록 = state.필터영화목록.sort((a,b)=>{
        return b.popularity - a.popularity
      })
    },
    인기낮음순정렬:(state)=>{
      state.필터영화목록 = state.필터영화목록.sort((a,b)=>{
        return a.popularity - b.popularity
      })
    },
    장르정렬:(state,action)=>{
      state.필터영화목록 = state.영화목록.filter((item)=>{
        return true === item.genre_ids.some((it)=>(it === action.payload))
      })
    },
    연도변경:(state,action)=>{
      state.연도 = action.payload
    },
    연도필터링:(state)=>{
      state.필터영화목록 = state.영화목록.filter((item)=>{
        return state.연도[0]<=item.release_date.slice(0,4) && state.연도[1] >= item.release_date.slice(0,4)
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(영화API패치.pending, (state) => {
        state.로딩 = true;
      })
      .addCase(영화API패치.fulfilled, (state, action) => {
        state.로딩 = false;
        state.인기영화 = action.payload.인기영화;
        state.탑레영화 = action.payload.탑레영화;
        state.상영예정 = action.payload.상영예정;
        state.장르 = action.payload.장르;
      })
      .addCase(영화API패치.rejected, (state, action) => {
        state.로딩 = false;
        state.에러 = action.error.message;
        console.log(state.에러)
      });
    builder
      .addCase(영화디테일패치.pending, (state) => {
        state.로딩 = true;
      })
      .addCase(영화디테일패치.fulfilled, (state, action) => {
        state.로딩 = false;
        state.디테일아이템 = action.payload.영화디테일;
        state.추천영화 = action.payload.추천영화;
        state.영화리뷰 = action.payload.영화리뷰;
        state.영화비디오 = action.payload.영화비디오;
      })
      .addCase(영화디테일패치.rejected, (state, action) => {
        state.로딩 = false;
        state.에러 = action.error.message;
        console.log(state.에러)
      });
    builder
      .addCase(영화목록패치.pending, (state) => {
        state.목록로딩 = true;
      })
      .addCase(영화목록패치.fulfilled, (state, action) => {
        state.목록로딩 = false;
        state.영화목록 = action.payload.영화목록.results;
        state.필터영화목록 = state.영화목록
        state.현재페이지 = action.payload.페이지
        state.토탈페이지 = action.payload.토탈페이지
        console.log("영화목록", state.영화목록,'토탈페이지',state.토탈페이지);
        
      })
      .addCase(영화목록패치.rejected, (state, action) => {
        state.에러 = action.error.message;
        state.목록로딩 = false;
        console.log(state.에러)
      });
    builder
      .addCase(영화검색패치.pending,(state)=>{
        state.목록로딩 = true;
      })
      .addCase(영화검색패치.fulfilled,(state,action)=>{
        state.영화목록 = action.payload.영화검색.results
        state.필터영화목록 = state.영화목록
        state.현재페이지 = action.payload.페이지
        state.토탈페이지 = action.payload.토탈페이지
        console.log(state.영화목록)
        state.목록로딩 = false;
      })
      .addCase(영화검색패치.rejected,(state,action)=>{
        state.목록로딩 = false;
        state.에러 = action.error.message;
        console.log(state.에러)
      })
  },
});

export default movieslice;
export const {유저입력,유저검색,영화보기,검색어확정,인기순정렬,인기낮음순정렬,장르정렬,연도변경,연도필터링} = movieslice.actions