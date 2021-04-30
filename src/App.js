import ProductDetails from "./components/product-details";
import Layout from "./layout";
import Home from "./views/home";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/product-details/:id" component={ProductDetails} />
      </Layout>
    </Switch>
  );
};

export default App;
