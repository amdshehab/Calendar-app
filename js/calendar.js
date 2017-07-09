var h = React.createElement;
var taskArray = [];
var date = new Date();
var startTime = date.setHours(9, 00, 00)
var endDate = date.setHours(18, 00, 00)

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
  getInitialState: function() {
     return {
       startOfTask: this.props.start,
       endOfTask: this.props.end
     };
   },

    render: function(){
      return (
        h('div', {className: 'tasks'},
          h('h1', {className: 'some stuff'}, this.state.startOfTask + '||' + this.state.endOfTask)
        )
      )
    }
})

var taskCreator = (tasks) => {
  for(i = 0; i < tasks.length; i++){
    let time = tasks[i].start
    taskArray.push(h(TimeSlot, {start: timeFixer(tasks[i].start), end: timeFixer(tasks[i].end)}))
  }
  return taskArray
}


var timeFixer = (time) => {
  var theDate = new Date();
  theDate.setTime(startTime + (60*time*1000));
  return theDate.toISOString().slice(11, 16)
}
