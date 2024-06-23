import { generateId } from "../utils/GenerateId.js"

export class Memo {
    constructor(data) {
        this.name = data.name
        this.body = data.body
        this.color = data.color
        this.id = generateId()
        this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
        this.lastSaved = data.lastSaved ? new Date(data.lastSaved) : new Date()

    }

    get MenuTemplate() {
        return `
        <div>
          <p class="mdi mdi-note" style="color: ${this.color};" onclick="app.MemoController.selectActiveMemo('${this.id}')"><span id="memo-title">${this.name}</span> 
          </p>
        </div>
        `
    }

    get ActiveMemoTemplate() {
        return `
        <div class="card active-memo">
        <div class="active-memo-details border-bottom">
            <div>
            <p class="fs-3 mdi mdi-note" style="color: ${this.color};"><span id="memo-title">${this.name}</span></p>
            <button onclick=deleteMemo() class="delete btn btn-danger"><i class="mdi mdi-delete"></i>Delete Memo</button>
            </div>
            <p class="fs-6">Memo created on: ${this.ShortDate}</p>
            <p class="fs-6">Memo last saved on: ${this.LongDate}</p>
        </div>
        <div class="memo-body">
            <textarea name="body" id="body">
                ${this.body}
            </textarea>
        </div>
        </div> 
        `
    }

    get ShortDate() {
        return this.createdAt.toLocaleDateString()
    }

    get LongDate() {
        return this.lastSaved.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})
    }
}



{/* <div class="card">
<h5 class="card-header text-center"></h5>
<div class="card-body">
<h5 class="card-title">Special title treatment</h5>
<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */}