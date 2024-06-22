import { AppState } from "../AppState.js"
import { Memo } from "../models/Memo.js"


class MemoService {

    createMemo(memoData) {
        const memos = AppState.memos
        const newMemo = new Memo(memoData)
        memos.push(newMemo)
    }
}

export const memoService = new MemoService()