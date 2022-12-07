import { h } from "preact";
import { Route, Router } from "preact-router";
import { QueryClient, QueryClientProvider } from "react-query";

// Components
import Header from "./header";

// Routes
import Home from "../routes/home";
import Vip from "../routes/vip";
import NotFound from "../routes/error404/error404";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div id="app">
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/vip" component={Vip} />
        <Route path="/404" component={NotFound} />
      </Router>
    </div>
  </QueryClientProvider>
);

export default App;
