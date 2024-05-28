import axios from 'axios';

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadUserRequest"
        });

        const { data } = await axios.get(`/api/me`);

        dispatch({
            type: "LoadUserSuccess",
            payload: data.user
        });

    } catch (error) {
        dispatch({
            type: "LoadUserFailure",
            payload: error.response.data.message
        })
    }
}

export const loginUser = ({ name, email, password }) => async (dispatch) => {
    try {
        dispatch({
            type: "LoginUserRequest"
        });

        const { data } = await axios.post(`/api/login`, { name, email, password }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        dispatch({
            type: "LoginUserSuccess",
            payload: data
        });

    } catch (error) {
        dispatch({
            type: "LoginUserFailure",
            payload: error.response.data.message
        })
    }
}

export const registerUser = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "RegisterUserRequest"
        });

        const { data } = await axios.post(`/api/register`, formData, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        dispatch({
            type: "RegisterUserSuccess",
            payload: data
        });

    } catch (error) {
        dispatch({
            type: "RegisterUserFailure",
            payload: error.response.data.message
        })
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LogoutUserRequest"
        });

        const { data } = await axios.get(`/api/logout`);

        dispatch({
            type: "LogoutUserSuccess",
            payload: data.message
        });

    } catch (error) {
        dispatch({
            type: "LogoutUserFailure",
            payload: error.response.data.message
        })
    }

}

export const updateProfile = (name) => async (dispatch) => {
    try {
        dispatch({
            type: "UpdateProfileRequest"
        });

        const { data } = await axios.put(`/api/me`, { name }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        dispatch({
            type: "UpdateProfileSuccess",
            payload: data
        });
    } catch (error) {
        dispatch({
            type: "UpdateProfileFailure",
            payload: error.response.data.message
        })
    }
}

export const deleteMyProfile = () => async (dispatch) => {
    try {
        dispatch({
            type: "DeleteProfileRequest"
        });

        const { data } = await axios.delete(`/api/me`);

        dispatch({
            type: "DeleteProfileSuccess",
            payload: data.message
        });

    } catch (error) {
        dispatch({
            type: "DeleteProfileFailure",
            payload: error.response.data.message
        })
    }
}