

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { auth, firestore } from '../../config/firebaseConfig';
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc, getDoc } from 'firebase/firestore';

// interface UserInfo {
//     id: string;
//     fullName: string | null;
//     password: string;
//     email: string | null;
// }

// interface AuthState {
//     user: UserInfo | null;
//     status: 'idle' | 'loading' | 'succeeded' | 'failed';
//     error: string | null;
// }

// const initialState: AuthState = {
//     user: null,
//     status: 'idle',
//     error: null,
// };

// export const login = createAsyncThunk(
//     'auth/login',
//     async ({ email, password }: { email: string; password: string }, thunkAPI) => {
//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;

//             // Fetch user fullName from Firestore
//             const userDoc = await getDoc(doc(firestore, 'users', user.uid));
//             const fullName = userDoc.exists() ? userDoc.data().fullName : null;

//             return { email: user.email, fullName, password };
//         } catch (error) {
//             if (error instanceof Error) {
//                 return thunkAPI.rejectWithValue(error.message);
//             }
//             return thunkAPI.rejectWithValue('An unknown error occurred');
//         }
//     }
// );

// export const register = createAsyncThunk(
//     'auth/register',
//     async ({ fullName, email, password }: { fullName: string; email: string; password: string }, thunkAPI) => {
//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;
//             await setDoc(doc(firestore, 'users', user.uid), {
//                 fullName,
//                 email,
//                 password
//             });
//             return { fullName, email, password };
//         } catch (error) {
//             if (error instanceof Error) {
//                 return thunkAPI.rejectWithValue(error.message);
//             }
//             return thunkAPI.rejectWithValue('An unknown error occurred');
//         }
//     }
// );

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         logout: (state) => {
//             state.user = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(login.pending, (state) => {
//                 state.status = 'loading';
//                 state.error = null;
//             })
//             .addCase(login.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.user = action.payload;
//             })
//             .addCase(login.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.payload as string;
//             })
//             .addCase(register.pending, (state) => {
//                 state.status = 'loading';
//                 state.error = null;
//             })
//             .addCase(register.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.user = action.payload;
//             })
//             .addCase(register.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.payload as string;
//             });
//     },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, firestore } from '../../config/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

interface UserInfo {
    id: string;
    fullName: string | null;
    password: string;
    email: string | null;
}

interface AuthState {
    user: UserInfo | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    status: 'idle',
    error: null,
};

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }: { email: string; password: string }, thunkAPI) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Lấy fullName từ Firestore
            const userDoc = await getDoc(doc(firestore, 'users', user.uid));
            const fullName = userDoc.exists() ? userDoc.data().fullName : null;

            // Trả về user với id, email, fullName và password
            return { id: user.uid, email: user.email, fullName, password };
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue('An unknown error occurred');
        }
    }
);

export const register = createAsyncThunk(
    'auth/register',
    async ({ fullName, email, password }: { fullName: string; email: string; password: string }, thunkAPI) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Lưu user vào Firestore
            await setDoc(doc(firestore, 'users', user.uid), {
                fullName,
                email,
                password
            });

            // Trả về user với id, email, fullName và password
            return { id: user.uid, fullName, email, password };
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue('An unknown error occurred');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload; // user có chứa id, email, fullName, password
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(register.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload; // user có chứa id, email, fullName, password
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
