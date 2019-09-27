Promise.resolve()
  .then(() => { throw 'foo' })
  .then(() => { throw 'bar' }, err => { console.error("here", err) })
  .catch(err => console.error('final', err))
