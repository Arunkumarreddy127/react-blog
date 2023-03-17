import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import BlogView from "./BlogView";
import BlogSlider from "./BlogSlider";
import Create from "./Create";

function App() {
  return (
    <div className="App">
      <div className="sophia-wrapper" style={{ marginTop: '100px' }}>
        <div className="root">
          <Router>
            <Header />
            <Banner />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/blogs/:id">
                <BlogView />
              </Route>
              <Route exact path="/allblogs">
              <BlogSlider />
              </Route>
              <Route exact path="/create">
              <Create />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
