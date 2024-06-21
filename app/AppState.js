import { Memo } from './models/Memo.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  memos = [
    new Memo({
      name: 'Example One',
      body: 'This is an example of a memo. I hope that this works.'
    }),
    new Memo({
      name: 'Example Two',
      body: 'This is an example of a note.'
    }),
    new Memo({
      name: 'Example Three',
      body: 'This is an example of a memo.'
    }),
    new Memo({
      name: 'Example Four',
      body: 'This is an example of a memo. I hope that this works. Please...'
    }),

  ]

  activeMemo = null
}

export const AppState = createObservableProxy(new ObservableAppState())