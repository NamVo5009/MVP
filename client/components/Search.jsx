import React from 'react';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      player1:"ShallowSpoon-1981",
      player2:"ChipSkylark-11423",
      hero: "mccree",
      save: false
    }
    this.submitHandle = this.submitHandle.bind(this)
    this.onChangeHandle = this.onChangeHandle.bind(this)
    this.heroChange = this.heroChange.bind(this)
    this.saveChange = this.saveChange.bind(this)
  }

  onChangeHandle(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  heroChange(e){
    this.setState({
      hero: e.target.value
    })
  }

  saveChange(e){
    this.setState({
      save: !this.state.save
    })
    console.log(this.state.save)
  }

  submitHandle(){
    this.props.searchHandler(this.state.player1, this.state.player2, this.state.hero, this.state.save)
  }

  render(){
    return(
      <div>

        <input name='player1'  value = {this.state.player1} onChange={this.onChangeHandle}></input>
        <input name='player2' value = {this.state.player2} onChange={this.onChangeHandle}></input><br></br>
        <select onChange={this.heroChange}>
          <option value="">--Please choose a hero--</option>
          <option value="ana">Ana</option>
          <option value="bastion">Bastion</option>
          <option value="brigitte">Brigitte</option>
          <option value="dVa">D.Va</option>
          <option value="doomfist">Doomfist</option>
          <option value="genji">Genji</option>
          <option value="hanzo">Hanzo</option>
          <option value="junkrat">Junkrat</option>
          <option value="lúcio">Lúcio</option>
          <option value="mccree">McCree</option>
          <option value="mei">Mei</option>
          <option value="mercy">Mercy</option>
          <option value="orisa">Orisa</option>
          <option value="pharah">Pharah</option>
          <option value="reaper">Reaper</option>
          <option value="reinhardt">Reinhardt</option>
          <option value="roadhog">Roadhog</option>
          <option value="soldier76">Soldier 76</option>
          <option value="sombra">Sombra</option>
          <option value="symmetra">Symmetra</option>
          <option value="torbjörn">Torbjörn</option>
          <option value="tracer">Tracer</option>
          <option value="widowmaker">Widowmaker</option>
          <option value="winston">Winston</option>
          <option value="zarya">Zarya</option>
          <option value="zenyatta">Zenyatta</option>
        </select>
        <input type="checkbox" onChange={this.saveChange}></input>Save Data
        <button onClick={this.submitHandle}>Compare</button>

      </div>
    )
  }
}

export default Search;