var h = React.createElement;

var Calendar =  React.createClass({
  render: function(){
    return (
      h('div', {className: 'theDiv'},
        h('h1', {className: 'date'}, 'Date:' + new Date().toISOString().slice(0, 10)),
       )
    )
  }
})




//https://facebook.github.io/react/docs/react-without-jsx.html
