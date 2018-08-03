var data = {
  valueKey: 'n'
}
function change(old, neow){
  // add mode
  if (old.length < neow.length) {
    return neow
  }
  // remove mode
  else {
    return old.map(v => {
      let found = neow.some(n =>{
        return v[data.valueKey] === n[data.valueKey]
      })

      if (!found) {
        v._destory = true
      }

      return v
    })
  }
}

describe('add new item', () =>{
  test('test1', () => {
    var old = []
    var neow = [
      {n: 'hello1'}
    ]

    expect(change(old,neow)).toMatchObject([
      {n: 'hello1'}
    ])
  })

  test('test2', () => {
    var old = [
      {n: 'hello1'}
    ]
    var neow = [
      {n: 'hello1'},
      {n: 'hello2'}
    ]

    expect(change(old,neow)).toMatchObject([
      {n: 'hello1'},
      {n: 'hello2'}
    ])
  })
})


describe('remove item', () =>{
  test('test1', () => {
    var old = [
      {n: 'hello1'}
    ]
    var neow = [
    ]

    expect(change(old,neow)).toMatchObject([
      {n: 'hello1', _destory: true}
    ])
  })

  test('test2', () => {
    var old = [
      {n: 'hello1'},
      {n: 'hello2'}
    ]
    var neow = [
      {n: 'hello2'}
    ]

    expect(change(old,neow)).toMatchObject([
      {n: 'hello1', _destory: true},
      {n: 'hello2'}
    ])
  })
})