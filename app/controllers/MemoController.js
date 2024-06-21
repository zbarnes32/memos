import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class MemoController {
    constructor() {
        console.log('From the MemoController 👍')
    }

    drawActiveMemo(){
        let memos = AppState.memos
        let innerHTMLString = ''
        console.log('drawing active memo', memos)
        memos.forEach((memo) => {
            innerHTMLString += memo.ActiveMemoTemplate
        });
        setHTML('activeMemo', innerHTMLString)
    }

    createNewMemo(){
        event.preventDefault()
        console.log('is this button working')
        let form = event.target
        console.log('is this form?', form)
        const memoData = getFormData(form)
        console.log('is this the correct data from the form', memoData)
        

    }
}