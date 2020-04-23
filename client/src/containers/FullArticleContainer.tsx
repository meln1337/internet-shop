import React from 'react'
import { withRouter } from 'react-router-dom'
import FullArticle from '../pages/FullArticle'
import { AppStateType } from '../redux/store'
import { FullArticleContainerMSTP } from '../types/FullArticleContainer'
import { connect } from 'react-redux'

class FullArticleContainer extends React.Component<any> {
    componentDidMount() {
        debugger
        console.log(this.props)
    }

    componentDidUpdate() {
        debugger
    }

    render() {
        return this.props.article ? <FullArticle {...this.props.article} /> : <div></div>
    }
}

const mapStateToProps = (state: AppStateType, props: any): FullArticleContainerMSTP => {
    debugger
    return {
        article: state.articleReducer.articles.find()
    }
}

const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FullArticleContainer))