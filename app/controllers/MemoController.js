import { AppState } from "../AppState.js";
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
        

    }
}