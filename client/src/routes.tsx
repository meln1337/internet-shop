import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import FullArticleContainer from './containers/FullArticleContainer'
import ArticlesContainer from './containers/ArticlesContainer'
import ArticlesByCategoryContainer from './containers/ArticlesByCategoryContainer'
import Cart from './components/Cart'

const useRoutes: React.FC = () => (
    <Router>
        <Header />
        <Cart />
        <Switch>
            <Route exact path="/">
                <Sidebar />
                <ArticlesContainer />
            </Route>
            <Route path="/articles/:id">
                <Sidebar />
                <FullArticleContainer />
            </Route>
            <Route path="/category/:subcategory/:category">
                <Sidebar />
                <ArticlesByCategoryContainer />
            </Route>
        </Switch>
    </Router>
)

export default useRoutes