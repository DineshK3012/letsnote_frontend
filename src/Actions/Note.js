import axios from "axios";

export const getAllNotes = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadNotesRequest"
        })

        const { data } = await axios.get(`/api/notes`);

        dispatch({
            type: "LoadNotesSuccess",
            payload: data.notes
        })

    } catch (error) {
        dispatch({
            type: "LoadNotesFailure",
            payload: error.response.data.message
        })
    }
}

export const getCategoryNotes = (category_id) => async (dispatch) => {
    try {
        dispatch({
            type: "LoadNotesRequest"
        })

        const { data } = await axios.get(`/api/notes/${category_id}`);

        dispatch({
            type: "LoadNotesSuccess",
            payload: data.notes
        })


    } catch (error) {
        dispatch({
            type: "LoadNotesFailure",
            payload: error.response.data.message
        })
    }
}

export const addNote = (note) => async (dispatch) => {
    try {
        dispatch({
            type: "AddNoteRequest"
        })

        const { data } = await axios.post(`/api/note`,
            note,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        dispatch({
            type: "AddNoteSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "AddNoteFailure",
            payload: error.response.data.message
        })
    }
}

export const editNote = (note_id, note) => async (dispatch) => {
    try {
        dispatch({
            type: "EditNoteRequest"
        })

        const { data } = await axios.put(`/api/note/${note_id}`, note, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        dispatch({
            type: "EditNoteSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "EditNoteFailure",
            payload: error.response.data.message
        })
    }
}

export const deleteNote = (note_id) => async (dispatch) => {
    try {
        dispatch({
            type: "DeleteNoteRequest"
        })

        const { data } = await axios.delete(`/api/note/${note_id}`);

        dispatch({
            type: "DeleteNoteSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "DeleteNoteFailure",
            payload: error.response.data.message
        })
    }
}