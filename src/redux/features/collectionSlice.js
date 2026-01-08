import { createSlice } from "@reduxjs/toolkit";
import { toast, ToastContainer, Zoom } from "react-toastify";

const initialState = {
    items : JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers:{
        addToCollection:(state, action)=>{
            // console.log("Ha Ha")
            const alreadyExists = state.items.find(
                items => items.id == action.payload.id
               
            )

            if(!alreadyExists){
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
                //  console.log("Hao Hao")
            }
        },
        removeFromCollection:(state, action)=>{
            state.items = state.items.filter(
                item => item.id != action.payload.id
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection:(state)=>{
            state.items = []
            localStorage.removeItem('collection')
        },
        addedToast:()=>{
            toast.success("Added To Collection", {
                position: "bottom-right",
                autoClose: 1998,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
                className: "add-toast"
            });
        },
        removeToast:()=>{
            toast.error("Remove From Collection", {
               position: "bottom-right",
                autoClose: 1998,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
                className: "remove-toast"
            });
        },
        clearCollectionToast:()=>{
            toast.success('Your Media Cleared !', {
                position: "bottom-center",
                autoClose: 1998,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
                className: "clearcollection-toast"
            });
        }
    }

})


export const {
    addToCollection,
    removeFromCollection,
    clearCollection,
    addedToast,
    removeToast,
    clearCollectionToast
} = collectionSlice.actions

export default collectionSlice.reducer