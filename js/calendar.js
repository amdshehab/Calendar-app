var h = React.createElement;

var Calendar =  React.createClass({
  render: function(){
    return (
      h('div', {className: 'theDiv'},
        h('h1', {className: 'date'}, 'Date:' + new Date().toISOString().slice(0, 10)),
        h(TimeSlot)
       )
    )
  }
})

var TimeSlot = React.createClass({
    render: function(){
      return (
        h('div', null,
          h('h1', {className: 'some stuff'}, 'hello stuff')
        )
      )
    }
})
