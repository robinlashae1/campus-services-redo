import { createSlice } from "@reduxjs/toolkit";

// slice
const slice = createSlice({
    name: 'schools',
    initialState: {
        user: null,
        serviceCategoryList: [],
        servicesList: [],
        userServiceList: [],
        schoolList: [],
        schoolId: [],
        serviceId: [],
        serviceCategoryId: []
    },
    reducers: {
        setRedUser: (state, action) => {
            state.user = action.payload
        },
        chooseSchool: (state, action) => {
            state.schoolId = action.payload
        },
        chooseService: (state, action) => {
            state.serviceId = action.payload
        },
        chooseServiceCategory: (state, action) => {
            state.serviceCategoryId = action.payload
        },
        setServiceList:(state, action) => {
            state.servicesList = action.payload
        },
        setServiceCategoryList: (state, action) => {
            state.serviceCategoryList = action.payload
        },
        setUserServiceList: (state, action) => {
            state.userServiceList = action.payload
        },
        setSchoolList: (state, action) => {
            state.schoolList = action.payload
        }
    }
})

// actions
const { setRedUser, setSchoolPickId, chooseSchool, chooseService, chooseServiceCategory, setServiceList, setServiceCategoryList,setUserServiceList,setSchoolList} = slice.actions

// exports
export {setRedUser, setSchoolPickId, chooseSchool, chooseService, chooseServiceCategory, setServiceList, setServiceCategoryList,setUserServiceList,setSchoolList }
export default slice.reducer