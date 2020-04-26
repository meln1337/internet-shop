import React from 'react'
import { connect } from 'react-redux'
import Articles from '../components/Articles'
import { setArticlesThunk } from '../redux/actions/article.actions'
import { ArticlesContainerProps, ArticlesContainerMSTP, ArticlesContainerMDTP } from '../types/types'
import { TAppState } from '../redux/store'

class ArticlesContainer extends React.Component<ArticlesContainerProps> {
    componentDidMount() {
        if (this.props.articles.length < 2) {
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

const mapStateToProps = (state: TAppState): ArticlesContainerMSTP => ({
    articles: state.articleReducer.articles
})

const mapDispatchToProps: ArticlesContainerMDTP = {
    setArticles: () => setArticlesThunk()
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)