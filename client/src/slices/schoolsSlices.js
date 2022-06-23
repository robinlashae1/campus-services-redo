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
        schoolName: [],
        servicePick: [],
        serviceCategoryPick: [],
        schoolPickId: [],
        servicePickId: [],
        serviceCategoryPickId: []
    },
    reducers: {
        setRedUser: (state, action) => {
            state.user = action.payload
        },
        chooseSchool: (state, action) => {
            state.schoolName = action.payload
        },
        chooseService: (state, action) => {
            state.servicePick = action.payload
        },
        chooseServiceCategory: (state, action) => {
            state.serviceCategoryPick = action.payload
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
        },
        setSchoolPickId: (state, action) => {
            state.schoolPickId = action.payload
        }
    }
})

// actions
const { setRedUser, setSchoolPickId, chooseSchool, chooseService, chooseServiceCategory, setServiceList, setServiceCategoryList,setUserServiceList,setSchoolList} = slice.actions

// exports
export {setRedUser, setSchoolPickId, chooseSchool, chooseService, chooseServiceCategory, setServiceList, setServiceCategoryList,setUserServiceList,setSchoolList }
export default slice.reducer