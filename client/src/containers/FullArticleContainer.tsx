import React from 'react'
import { withRouter } from 'react-router-dom'
import FullArticle from '../pages/FullArticle'
import { AppStateType } from '../redux/store'
import { FullArticleContainerMSTP, FullArticleContainerProps, FullArticleContainerMDTP } from '../types/FullArticleContainer'
import { connect } from 'react-redux'
import { setArticleThunk } from '../redux/actions'
import { ArticleProps } from '../types/types'

class FullArticleContainer extends React.Component<FullArticleContainerProps> {
    componentDidMount() {
        if (!this.props.article) {
            this.props.setArticle(this.props.id)
        }
    }

    render() {
        return this.props.article ? <FullArticle {...this.props.article} /> : <div>asdfsdfa</div>
    }
}

const mapStateToProps = (state: AppStateType, props: any): FullArticleContainerMSTP => {
    return {
        article: state.articleReducer.articles.find((article: ArticleProps) => article.id === props.match.params.id),
        id: props.match.params.id
    }
}

const mapDispatchToProps: FullArticleContainerMDTP = {
    setArticle: (id: string) => setArticleThunk(id)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FullArticleContainer))