import React from 'react'
class SearchBar extends React.Component {
  constructor(props){ /*initialize the state*/
    super(props); /*calling the parents stuff (e.g. Component)*/

    this.state={ term: '' } /*initial object with property 'term' , 只有這裡的 state 宣告是用 '=' ，除此之外都是用 this.setState*/}

  render () {
    return(
      <div>
        <input
        type="text"
        value={this.state.term}
        onChange={(event) => this.setState({ term: event.target.value })}
        />
        {/*重新set state後會 重新執行 render()*/}
        {/*
          <h3>Value of the input:</h3>
          <h4>{this.state.term}</h4>
          */}
      </div>
    )
  }
}

export default SearchBar;
