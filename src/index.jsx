/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

// const routes = [
//   {
//     path: "/",
//     component: () => {return <h1>Hello World</h1>},
//   },
// ];

render(
  () => (
    <Router>
      <Route path="/" component={() => <div>Hello Newman</div>} />
    </Router>
  ),
  document.getElementById("app")
);
