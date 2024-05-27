import axios from "axios";

export const getAllCategories = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadCategoryRequest"
        })

        const { data } = await axios.get('/api/categories');

        dispatch({
            type: "LoadCategorySuccess",
            payload: data.categories
        })

    } catch (error) {
        dispatch({
            type: "LoadCategoryFailure",
            payload: error.response.data.message
        })
    }
}

export const updateCategory = (category_id, Category) => async (dispatch) => {
    try {
        dispatch({
            type: "updateCategoryRequest"
        })

        console.log(category_id, Category)

        const { data } = await axios.put(`/api/category/${category_id}`,
            { name: Category },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        dispatch({
            type: "updateCategorySuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "updateCategoryFailure",
            payload: error.response.data.message
        })
    }
}

export const deleteCategory = (category_id) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteCategoryRequest"
        })

        const { data } = await axios.delete(`/api/category/${category_id}`);

        dispatch({
            type: "deleteCategorySuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "deleteCategoryFailure",
            payload: error.response.data.message
        })
    }
}