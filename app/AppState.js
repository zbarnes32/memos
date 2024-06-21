import { Memo } from './models/Memo.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  memos = [
    new Memo({
      name: 'Example One',
      body: 'This is an example of a memo. I hope that this works.'
    }),
    
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())