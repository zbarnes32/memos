import { AppState } from "../AppState.js"
import { Memo } from "../models/Memo.js"
import { loadState, saveState } from "../utils/Store.js"
import { setHTML } from "../utils/Writer.js"


class MemoService {

    createMemo(memoData) {
        const memos = AppState.memos
        const newMemo = new Memo(memoData)
        memos.push(newMemo)
        //this.saveMemos()
    }

    selectActiveMemo(memoId){
        const selectedMemo = AppState.memos.find((memo) => memo.id == memoId)
        AppState.activeMemo = selectedMemo
    }

    saveActiveMemo(newMemoBody){
        const currentMemo = AppState.activeMemo
        currentMemo.body = newMemoBody
        AppState.emit('activeMemo')
        this.saveMemos()
    }

   


    saveMemos() {
        saveState('memos', AppState.memos)
    }

    loadMemos(){
        AppState.memos = loadState('memos',[Memo])
    }
}

export const memoService = new MemoService()