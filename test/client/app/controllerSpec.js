describe('Controller: MainCtrl', function() {
  // Instantiate a new version of my module before each test
  beforeEach(module('notesApp'))

  var ctrl

  beforeEach(inject(function($controller){
    ctrl = $controller('MainCtrl')
  }))

  it('should have items available on load', function() {
    expect(ctrl.items).toEqual([
      {id: 1, label: 'First', done: false},
      {id: 2, label: 'Second', done: false}
    ])
  })

  it('should have highlight items based on state', function() {
    var item = {id: 1, label: 'First', done: true}

    var actualClass = ctrl.getDoneClass(item)
    expect(actualClass.finished).toBeTruthy()
    expect(actualClass.unfinished).toBeFalsy()

    item.done = false
    var actualClass = ctrl.getDoneClass(item)
    expect(actualClass.finished).toBeFalsy()
    expect(actualClass.unfinished).toBeTruthy()
  })
})
