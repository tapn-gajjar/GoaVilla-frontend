
const initialState = {
    saveTestData : "",
    saveCategoryData : [],
    saveSingleCategoryData : {},
    saveCandidatesData : [],
    saveSingleCandidatesData : {},
    saveScheduleInterviewData : [],
    saveSingleInterviewData : {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ACTION_TEST" : 
        return { ...state, saveTestData: action.payload}


        default:
            return { ...state};
            
    }
}

export default reducer