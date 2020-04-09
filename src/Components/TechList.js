import React, { Component } from 'react'

import TechItem from './TechItem'

class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  };

  componentDidMount() {
    const techs = localStorage.getItem('techs')

    if(techs) {
      this.setState({ techs: JSON.parse(techs) })
    }
  }

  componentDidUpdate(_, prevState) {
    if(this.state.techs !== prevState.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  handleInputChange = event => {
    this.setState({ newTech: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ techs: [...this.state.techs, this.state.newTech], newTech: '' })
  }

  handleDelete = tech => {
    event.preventDefault()

    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map((tech, i) => 
            <TechItem
              key={i}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          )}
        </ul>
        <input 
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type='submit'>Enviar</button>
      </form>
      </>
    );
  }
}

export default TechList