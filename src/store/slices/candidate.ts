import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from 'dayjs';
interface Candidate {
    candidateId: number;
    title: string;
    firstname: string;
    lastname: string;
    birthdate: dayjs.Dayjs;
    nationality: string;
    citizenIdPart1: string;
    citizenIdPart2: string;
    citizenIdPart3: string;
    citizenIdPart4: string;
    citizenIdPart5: string;
    gender: string;
    phonePrefix: string;
    phoneNumber: string;
    passportNo: string;
    expectedsalary: string;
}
interface CandidateState {
    candidateList: Candidate[]
}
const initialState: CandidateState = {
    candidateList: JSON.parse(localStorage.getItem('candidateList') || '[]'),
};
const candidateSlice = createSlice({
    name: 'candidate',
    initialState,
    reducers: {
        addCandidate: (state, action: PayloadAction<Candidate>) => {
            console.log('addCandidate')
            state.candidateList.push(action.payload)
            localStorage.setItem('candidateList', JSON.stringify(state.candidateList))
        },
        updateCandidate: (state, action: PayloadAction<Candidate>) => {
            console.log('updateCandidate')
            const index = state.candidateList.findIndex(candidate => candidate.candidateId === action.payload.candidateId)
            if (index !== -1) {
                state.candidateList[index] = action.payload
                localStorage.setItem('candidateList', JSON.stringify(state.candidateList))
            }
        },
        deleteCandidate: (state, action: PayloadAction<number>) => {
            state.candidateList = state.candidateList.filter(candidate => candidate.candidateId !== action.payload)
            console.log('state filter => ', state.candidateList.filter(candidate => candidate.candidateId !== action.payload))
            localStorage.setItem('candidateList', JSON.stringify(state.candidateList))
        }
    }
});
export const { addCandidate, updateCandidate, deleteCandidate } = candidateSlice.actions;
export default candidateSlice.reducer;