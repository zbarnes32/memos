import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

export class MenuController {
    constructor() {
        console.log('From the MenuController 🧾')
       // this.drawMemos()
    }

    //     Relocating to MemoController
    //     drawMemos(){
    //     let memos = AppState.memos
    //     let innerHTMLString = ''
    //     console.log('drawing memolist', memos)
    //     memos.forEach((memo) => {
    //         innerHTMLString += memo.MenuTemplate
    //     });
    //     setHTML('memoList', innerHTMLString)
    // }
}