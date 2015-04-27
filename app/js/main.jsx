var React = require('react');
var Parse = require('parse').Parse;
var PARSE_APP_ID = "s6CWs4ntdmIZgrQ0MfDT02DgRKTp4q3InQHUA77U";
var PARSE_JS_KEY = "F9rFXoA9svREjJOfxoFedVUBdhqWQBOZtszuiEK4";
Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);

/* ROUTES */
var App = require('./components/App.jsx');
var Login = require('./components/Login.jsx');
var Todos = require('./components/routes/Todos.jsx');

var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Todos} />
    <Route name="login" handler={Login}/>
    <Route name="todos" handler={Todos} >
      <Route name="todo-new" path="/todos/new" handler={Todos}/>
      <Route name="todo" path="/todo/:todoId" handler={Todos}/>
    </Route>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});