import React, { Component, PropTypes } from 'react'
import { connect } from 'redux-react'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions/reddit.js'
import Picker form '../components/Picker.js'
import Posts from '../components/Posts.js'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectReddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedReddit))
    }
  }
}
