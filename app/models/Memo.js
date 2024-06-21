export class Memo {
    constructor(data) {
        this.name = data.name
        this.body = data.body

    }

    get MenuTemplate() {
        return `
        <ul>Current Memos</ul>
          <li>${this.name}</li>
        
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