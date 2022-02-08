import { configureStore } from 

export const store = configureStore({() =>
    reducer: {
        counter: counterReducer,
    }
})