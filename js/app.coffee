App = Em.Application.create()

App.MyView = Em.View.extend 
  mouseDown: -> 
    window.alert "hello world!"
    return

Member = Em.Object.extend
  say: (thing) ->
    alert thing
    return

jane = Member.create 
  name: "Jane Kim"
  year: "CC'14"
  helloWorld: ->
    this.say "hello world, I'm " + this.get 'name'
    return

jane.helloWorld()