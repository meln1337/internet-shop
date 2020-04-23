import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import FullArticleContainer from './containers/FullArticleContainer'
import ArticlesContainer from './containers/ArticlesContainer'

const useRoutes: React.FC = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/">
                <Sidebar />
                <ArticlesContainer />
            </Route>
            <Route path="/articles/:id">
                <FullArticleContainer />
            </Route>
        </Switch>
        <Footer />   
    </Router>
)

export default useRoutes