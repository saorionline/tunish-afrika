import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/PageScrollTop'

// Pages import Here

//import Consulting from "./pages/Consulting";

// Elements import Here

import Elements from "./elements/elements/Elements";
import Gallery from "./elements/gallery/Gallery";

// Import Css Here
import './assets/scss/style.scss';


const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>

                    <Route path={`${process.env.PUBLIC_URL + "/shelf"}`} exact component={Shelf}/>

                    {/* Gallery  */}

                    <Route path={`${process.env.PUBLIC_URL + "/sections"}`} exact component={Sections}/>
                    <Route path={`${process.env.PUBLIC_URL + "/call-to-action"}`} exact component={CalltoAction}/>
                    <Route path={`${process.env.PUBLIC_URL + "/gallery"}`} exact component={Gallery}/>
                    <Route path={`${process.env.PUBLIC_URL + "/error"}`} exact component={Error}/>

                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App