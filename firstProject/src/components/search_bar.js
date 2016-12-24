import React from 'react'

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {term: ''}
  }
  onInputChange(term){
    this.setState({term: term})
    this.props.onSearchChange(term) //TODO callback function 不太懂為何用這種方式傳回給 App 的 props 給予新的 term 做查找？
  }

  render () {
    return(
      <div className="search-bar">
        <input
        type="text"
        value={this.state.term}
        onChange={(event) => this.onInputChange(event.target.value)}
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
