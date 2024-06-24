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
        if (!currentMemo){
            return
        }
        currentMemo.body = newMemoBody
        currentMemo.lastSaved = new Date()
        AppState.emit('activeMemo')
        this.saveMemos()
    }
    
    deleteMemo(memoId) {
        const memos = AppState.memos
        const memoIndex = memos.findIndex((memo) => memo.id == memoId)
        // console.log('did it find the index?', memoIndex)
        if (memoIndex == -1){
            return
        }
        // console.log(memos)
        memos.splice(memoIndex, 1)
        AppState.activeMemo = null
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