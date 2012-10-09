App = Em.Application.create()

App.MyView = Em.View.extend 
  mouseDown: -> 
    window.alert "hello world!"

Member = Em.Object.extend
  say: (thing) ->
    alert thing

jane = Member.create 
  name: "Jane Kim"
  year: "CC'14"
  helloWorld: ->
    this.say "hello world, I'm " + this.get 'name'

jane.helloWorld()