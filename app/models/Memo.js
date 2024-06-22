export class Memo {
    constructor(data) {
        this.name = data.name
        this.body = data.body
        this.color = data.color

    }

    get MenuTemplate() {
        return `
          <p class="mdi mdi-note" style="color: ${this.color};"><span id="memo-title">${this.name}</span></p>
        
        `
    }

    // get ActiveMemoTemplate() {
    //     return `
    //     <div class="col-12">
    //       <div class="d-flex justify-content-center">
    //         <form onsubmit="app.MemoController.createNewMemo()">
    //           <input class="form-style" type="text" name="name" placeholder="Memo's Name" minlength="3" maxlength="15"
    //             required>
    //           <textarea class="form-style" name="memoBody" id="memoBody"
    //             placeholder="Enter your memo's details here..."></textarea>
    //           <button type="submit" class="btn btn-success">Save Memo</button>
    //         </form>
    //       </div>
    //     </div>
    //     `
    // }
}