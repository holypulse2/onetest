import "tailwindcss/tailwind.css";
import logo from './assets/images/logo.svg';
import './App.scss';
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Survery from "./pages/Survey";
import Page1 from "./pages/Page1";
import MainLayout from "./components/molecules/layouts/MainLayout";
import MainSurveyLayout from "./components/molecules/layouts/MainSurveyLayout";

export class Routes extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>

          <Route path='/survey/:path?' exact>
          <MainSurveyLayout>
            <Switch>
              <Route path='/survey' exact component={Survery} />
              <Route path='/survey/page1' component={Page1} />
              <Route component={() => (<div>404 Main Survey</div>)} exact path='/survey/*' />
            </Switch>
          </MainSurveyLayout>
        </Route>

          <Route>
            <MainLayout>
              <Switch>
                <Route path='/' exact component={LandingPage} />
                <Route component={() => (<div>404 Main</div>)} exact path="/*" />
              </Switch>
            </MainLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }  
}
