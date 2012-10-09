var App = Em.Application.create();

App.Main = Em.View.extend({
  templateName: 'main'
});

App.Nav = Em.View.extend({
  templateName: 'navigation'
});

Member = Em.Object.extend({
  say: function(thing){
    alert(thing);
  }
});

jane = Member.create({
  name: "Jane Kim",
  helloWorld: function() {
    this.say("hi my name is " + this.get('name'));
  }
});

BoardMember = Member.extend({
  say: function(thing){
    this._super(thing.toUpperCase());
  }
});

reuben = BoardMember.create({
  name: "Reuben Arnold"
});


// jane.helloWorld();
// reuben.say("more stuff");