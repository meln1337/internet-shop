import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { TAppState } from '../redux/store'
import { ArticlesByCategoryContainerMSTP, ArticlesByCategoryContainerMDTP, TArticlesByCategoryContainer } from '../types/types'
import { setArticlesByCategoryThunk } from '../redux/actions/category.actions'
import Articles from '../components/Articles'

class ArticlesByCategoryContainer extends React.Component<TArticlesByCategoryContainer> {
    componentDidMount() {
        if (!this.props.articles) {
            this.props.setArticlesByCategory(this.props.category)
        }
    }

    componentDidUpdate(prevProps: TArticlesByCategoryContainer) {
        if (prevProps.category !== this.props.category && !this.props.articles) {
            this.props.setArticlesByCategory(this.props.category)
        }
    }

    render() {
        return (
            this.props.articles ? 
            <main className="main">
                <Articles articles={this.props.articles} />
            </main> : <div></div>
        )
    }
}

const mapStateToProps = (state: TAppState, props: any): ArticlesByCategoryContainerMSTP => ({
    articles: state.categoryReducer.articles[props.match.params.category],
    category: props.match.params.category
})

const mapDispatchToProps: ArticlesByCategoryContainerMDTP = {
    setArticlesByCategory: (category: string) => setArticlesByCategoryThunk(category)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticlesByCategoryContainer))