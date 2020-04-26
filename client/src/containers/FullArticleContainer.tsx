import React from 'react'
import { withRouter } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'
import FullArticle from '../pages/FullArticle'
import { TAppState } from '../redux/store'
import { FullArticleContainerMSTP, FullArticleContainerProps, FullArticleContainerMDTP } from '../types/types'
import { connect } from 'react-redux'
import { setArticleThunk } from '../redux/actions/article.actions'
import { TArticle } from '../types/types'
import { Spin } from 'antd'

class FullArticleContainer extends React.Component<FullArticleContainerProps> {
    componentDidMount() {
        if (!this.props.article) {
            this.props.setArticle(this.props.id)
        }
    }

    render() {
        return this.props.article ? <FullArticle {...this.props.article} /> : <main className="main"><Spin indicator={<LoadingOutlined spin />}></Spin></main>
    }
}

const mapStateToProps = (state: TAppState, props: any): FullArticleContainerMSTP => {
    return {
        article: state.articleReducer.articles.find((article: TArticle) => article.id === props.match.params.id),
        id: props.match.params.id
    }
}

const mapDispatchToProps: FullArticleContainerMDTP = {
    setArticle: (id: string) => setArticleThunk(id)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FullArticleContainer))