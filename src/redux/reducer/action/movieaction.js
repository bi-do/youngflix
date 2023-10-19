import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apikey = process.env.REACT_APP_apikey;

const 영화인스턴스 = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apikey}`,
  },
});

export const 영화API패치 = createAsyncThunk(
  "movieslice/영화API패치",
  async (유저파라미터값, thunk값) => {
    
    const 인기영화api = 영화인스턴스.get(
      `/movie/popular?language=en-US&page=1`
    );

    const 탑레영화api = 영화인스턴스.get(
      `/movie/top_rated?language=en-US&page=1`
    );

    const 상영예정api = 영화인스턴스.get(
      `/movie/upcoming?language=en-US&page=1`
    );

    const 장르api = 영화인스턴스.get(
        `genre/movie/list?language=en`
    )


    let [인기영화response, 탑레영화response, 상영예정response,장르response] =
      await Promise.all([인기영화api, 탑레영화api, 상영예정api,장르api]);

    const 인기영화 = 인기영화response.data;
    const 탑레영화 = 탑레영화response.data;
    const 상영예정 = 상영예정response.data;
    const 장르 = 장르response.data

    console.log("되는중", 인기영화, 탑레영화, 상영예정,'장르',장르);

    return { 인기영화, 탑레영화, 상영예정 , 장르};
  }
);

export const 영화디테일패치 = createAsyncThunk(
  'movieslice/영화디테일패치',
  async (파라미터값,thunk값) => { 
    const 영화디테일api = 영화인스턴스.get(
      `/movie/${파라미터값}?language=en-US`
    )

    const 영화비디오api =  영화인스턴스.get(
      `/movie/${파라미터값}/videos?language=en-US`
    )

    const 영화리뷰api = 영화인스턴스.get(
      `/movie/${파라미터값}/reviews?language=en-US&page=1`
    )

    const 추천영화api = 영화인스턴스.get(
      `/movie/${파라미터값}/recommendations?language=en-US&page=1`
    )

   let [디테일response,비디오response,영화리뷰response,추천영화response] = await Promise.all([영화디테일api,영화비디오api,영화리뷰api,추천영화api])

    const 영화비디오 = 비디오response.data
    const 영화디테일 = 디테일response.data
    const 영화리뷰 = 영화리뷰response.data
    const 추천영화 = 추천영화response.data
    
    console.log('영화디테일은',영화디테일,'비디오는',영화비디오,'리뷰는',영화리뷰,'추천영화는',추천영화)

    return {영화디테일,영화비디오,영화리뷰,추천영화}
  }
)

export const 영화목록패치 = createAsyncThunk(
  'movieslice/영화목록패치',
  async (유저파라미터,thunk값)=>{
    const 영화목록API = await 영화인스턴스.get(
      `/movie/popular?language=en-US&page=${유저파라미터?유저파라미터 : 1}`
    )
    const 영화목록 = await 영화목록API.data
    const 페이지 = 영화목록.page
    const 토탈페이지 = 영화목록.total_pages
    
    return {영화목록,페이지,토탈페이지}
  }
)

export const 영화검색패치 = createAsyncThunk(
  'movieslice/영화검색패치',
  async (유저파라미터,thunk값)=>{
    const 영화검색API = await 영화인스턴스.get(
      `/search/movie?query=${유저파라미터.검색어}&language=en-US&page=${유저파라미터.페이지?유저파라미터.페이지:1}`
    )
    const 영화검색 = await 영화검색API.data
    const 페이지 = 영화검색.page
    const 토탈페이지 = 영화검색.total_pages
    
    return {영화검색,페이지,토탈페이지}
  }
)