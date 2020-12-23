import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CookieConsent from './components/CookieConsent/CookieConsent';
import routes from './config/routes';
import Footer from './layouts/footer/footer';
import Navbar from './layouts/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {
            routes.map(route => {
              const { path, component: Component } = route
              return (
                <Route
                  path={path}
                  exact
                  key={path}
                  render={() => (
                    <Suspense fallback={<div>Loading...</div>}>
                      <Component />
                    </Suspense>
                  )}
                />
              )
            })
          }
        </Switch>
      </Router>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
