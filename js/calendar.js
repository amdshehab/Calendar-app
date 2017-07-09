var h = React.createElement;
var taskArray = [];

var Calendar =  React.createClass({
  render: function(){
    return (
      h('div', {className: 'theDiv'},
        h('h1', {className: 'date'}, 'Date:' + new Date().toISOString().slice(0, 10)),
        taskCreator(this.props.tasks)
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

var taskCreator = (tasks) => {
  for(i = 0; i < tasks.length; i++){
    taskArray.push(h(TimeSlot))
  }
  return taskArray
}
