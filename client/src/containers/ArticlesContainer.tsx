import React from 'react'
import { connect } from 'react-redux'
import Articles from '../components/Articles'
import { setArticlesThunk } from '../redux/actions'
import { ArticlesContainerProps, ArticlesContainerMSTP, ArticlesContainerMDTP } from '../types/ArticlesContainerTypes'
import { AppStateType } from '../redux/store'

class ArticlesContainer extends React.Component<ArticlesContainerProps> {
    componentDidMount() {
        if (this.props.articles.length === 0) {
            this.props.setArticles()
        }
    }

    render() {
        return this.props.articles ? 
        <main className="main">
            <Articles articles={this.props.articles} />
        </main> : <div></div>
    }
}

const mapStateToProps = (state: AppStateType): ArticlesContainerMSTP => ({
    articles: state.articleReducer.articles
})

const mapDispatchToProps: ArticlesContainerMDTP = {
    setArticles: () => setArticlesThunk()
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)