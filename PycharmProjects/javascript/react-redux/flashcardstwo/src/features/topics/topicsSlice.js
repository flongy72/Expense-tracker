import {createSlice} from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload;
            state.topics[action.payload.id].quizIds = [];
        },
        addQuizByTopic: (state, action) => {
            const {quizId, topicId} = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const {addTopic, addQuizByTopic} = topicsSlice.actions;
export default topicsSlice.reducer;