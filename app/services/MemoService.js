import { AppState } from "../AppState.js"
import { Memo } from "../models/Memo.js"


class MemoService {

    createMemo(memoData) {
        const memos = AppState.memos
        const newMemo = new Memo(memoData)
        memos.push(newMemo)
    }

    selectActiveMemo(memoId){
        const selectedMemo = AppState.memos.find((memo) => memo.id == memoId)
        AppState.activeMemo = selectedMemo
    }
}

export const memoService = new MemoService()