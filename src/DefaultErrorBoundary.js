import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DefaultErrorBoundary extends Component {
  state = {
    isError: false,
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { isError } = this.state
    const { children } = this.props

    return isError ? <div>Something went wrong!</div> : children
  }
}
