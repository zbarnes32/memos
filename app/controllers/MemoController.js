import { AppState } from "../AppState.js";
import { memoService } from "../services/MemoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class MemoController {
    constructor() {
        console.log('From the MemoController 👍')
        this.drawMemos()
        AppState.on('activeMemo', this.drawActiveMemo)
    }

    //TODO create an active memo
    // drawActiveMemo(){
    //     let memos = AppState.memos
    //     let innerHTMLString = ''
    //     console.log('drawing active memo', memos)
    //     memos.forEach((memo) => {
    //         innerHTMLString += memo.ActiveMemoTemplate
    //     });
    //     setHTML('activeMemo', innerHTMLString)
    // }

    drawMemos(){
        let memos = AppState.memos
        let innerHTMLString = ''
        console.log('drawing memolist', memos)
        memos.forEach((memo) => {
            innerHTMLString += memo.MenuTemplate
        });
        setHTML('memoList', innerHTMLString)
        this.totalMemos()
    }

    drawActiveMemo(){
        const activeMemo = AppState.activeMemo
        let innerHTMLString = activeMemo.ActiveMemoTemplate
        setHTML('activeMemo', innerHTMLString)
    }

    createMemo(){
        event.preventDefault()
        // ✅ console.log('is this button working')
        let form = event.target
        // ✅ console.log('is this form?', form)
        const memoData = getFormData(form)
        // ✅ console.log('is this the correct data from the form', memoData)
        memoService.createMemo(memoData)
        // @ts-ignore
        form.reset()
        this.drawMemos()
        // this.drawActiveMemo()
    }

    selectActiveMemo(memoId){
        // ✅ console.log('Does the list links work?')
        memoService.selectActiveMemo(memoId)
    }

    totalMemos(){
        let totalMemos = AppState.memos
        let memoCount = totalMemos.length
        console.log('total count', memoCount)
        setHTML('totalMemos', memoCount)
    }


}