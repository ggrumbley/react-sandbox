import React from 'react'

import Logo   from './components/logo/Logo'
import Whiskey from './components/Whiskey'
import schema from './schema'

let data = JSON.parse(localStorage.getItem('data'));

if (!data) {
  data = {};
  schema.forEach(item => data[item.id] = item.sample);
  data = [data];
}

export default React.createClass({
  render() {
    return(
      <div className="container">
        <Logo />
        <Whiskey schema={schema} initialData={data} />
      </div>
    )
  }
})
