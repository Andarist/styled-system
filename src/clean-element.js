import React from 'react'

const cleanElement = Component => {
  return class Cleaned extends React.Component {
    render() {
      const next = {}
      const keys = Object.keys(Cleaned.propTypes || {})
      for (let key in this.props) {
        if (keys.includes(key)) continue
        next[key] = this.props[key]
      }

      return React.createElement(Component, next)
    }
  }
}

export default cleanElement
