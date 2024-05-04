import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../../src/AxioxConfig/AxiosInstance'


 export const getAllMovies =createAsyncThunk('movies/getAllMovies',async ( _ ,thunkAPI )=>{
    
  try{
    const response= await axiosInstance.get('/popular')
    return response.data.results
  }
  catch(error){
      return thunkAPI.rejectWithValue(error.message)
  }
 })

 export const getMovieByID = createAsyncThunk('movies/getMovieByID', async (id, thunkAPI) => {
  try {
      const response = await axiosInstance.get(`/${id}`);
      return response.data
  } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
  }
})


  const movieSlice =createSlice({
        name:'movies',
        initialState:{
            value:[],
            value2:[],
            isLoading:false,
            isError:false
        },

      extraReducers:(build)=>{

        build.addCase(getAllMovies.pending, (state)=>{
            state.isLoading=true
            state.isError=false
        })

        build.addCase(getAllMovies.fulfilled, (state, action)=>{
            state.isLoading=false
            state.isError=false
            state.value= action.payload
        })

        build.addCase(getAllMovies.rejected, (state)=>{
          state.isError=true
      }) 
       
      build.addCase(getMovieByID.pending, (state)=>{
        state.isLoading=true
        state.isError=false
    })

       build.addCase(getMovieByID.fulfilled, (state, action)=>{
               state.isError=false
               state.isLoading=false
               state.value2= action.payload
       })

       build.addCase(getMovieByID.rejected, (state, action)=>{
        state.isError=true
        console.log(state , action , "rejected")
    }) 
      }
     
   })

   export default movieSlice.reducer