import React, { PropTypes } from 'react'

import Logo from './logo/Logo'
import Button from './button/Button'
import Dialog from './dialog/Dialog'
import Sheets from './sheets/Sheets'
import Form   from './form/Form'


class WhiskeyNotes extends React.Component {
  render () {
    return (
    <div className="container">
      <Logo />
      <div>Whiskey!</div>
    </div>
  )
  }
}

export default WhiskeyNotes;
