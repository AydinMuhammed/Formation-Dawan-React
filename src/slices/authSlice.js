import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    isConnected: false,
    error: false, 
    loading: false,
    user: null

}
    
export const loginUser = createAsyncThunk(
    "auth/login",
   async (credentials)=>{
    //Simule un exxès réseau
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(credentials.identifiant === "admin" && credentials.password === "admin"){
                resolve({
                    id:1,
                    identifiant: "admin",
                    password: "admin"
                })
            }else{
                reject(new Error("Identifiant ou mot de passe incorrect"))
            }
        }, 1000) 
    })
   }
)


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
       
        logout: (state, action)=>{
            state.isConnected = false
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(loginUser.pending, (state, action)=>{
            state.loading = true
            state.error = false
        })
        builder.addCase(loginUser.fulfilled,(state, action)=>{
            state.loading = false
            state.isConnected = true
            state.user = action.payload
            state.error = false
        })
        builder.addCase(loginUser.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
            state.isConnected = false
            state.user = null
        })
    }
})




export default authSlice.reducer;

export const { logout } = authSlice.actions;

