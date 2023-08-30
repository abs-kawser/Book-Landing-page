import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import { bookSlice } from './features/book/bookSlice'
import searchSlice from './features/book/searchSlice'



 const store = configureStore({
  reducer: {
    user:userSlice,
    searchItem:searchSlice,
   [bookSlice.reducerPath]: bookSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware()
  .concat(bookSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store