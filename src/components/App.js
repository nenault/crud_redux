import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import CatCreate from "./cats/CatCreate";
import CatDelete from "./cats/CatDelete";
import CatEdit from "./cats/CatEdit";
import CatShow from "./cats/CatShow";
import CatList from "./cats/CatList";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={CatList} />
            <Route path="/cats/new" exact component={CatCreate} />
            <Route path="/cats/edit/:id" exact component={CatEdit} />
            <Route path="/cats/delete/:id" exact component={CatDelete} />
            <Route path="/cats/:id" ex act component={CatShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
