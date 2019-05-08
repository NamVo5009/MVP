import React from 'react';
import Search from './Search';
import axios from 'axios'
import StatsList from './StatsList';
import style from 'styled-components'
import ListOfProfiles from './ListOfProfiles'
import { ETIME } from 'constants';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      playerOneStats: null,
      playerTwoStats: null,
      playerOne:"",
      playerTwo:"",
      hero:"",
      allProfiles: null,
      hero2: "",
      p1: true
    }
  this.searchHandler = this.searchHandler.bind(this);
  this.saveData = this.saveData.bind(this);
  this.getAllProfiles = this.getAllProfiles.bind(this);
  this.changeProfileHandler = this.changeProfileHandler.bind(this);
  }
  componentDidMount(){
    this.getAllProfiles();
  }

  changeProfileHandler(e){
    var clickedPro = this.state.allProfiles[e.target.id];
    var player = e.target.getAttribute('player');
    var hero = e.target.getAttribute( 'hero');
    console.log(e.target)
    if(this.state.p1){
      this.setState({
        hero: hero,
        playerOne: player,
        playerOneStats: clickedPro.stats.all,
        p1: !this.state.p1
      })
    } else {
      this.setState({
        hero2: hero,
        playerTwo: player,
        playerTwoStats: clickedPro.stats.all,
        p1: !this.state.p1
      })
    }

  }

  getAllProfiles(){
    axios('/api/allProfiles')
      .then((data)=> {
        console.log(data.data)
        this.setState({
          allProfiles: data.data
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  saveData(name, hero, data){
    axios.post('/api/newProfile', {battleTag: name, hero: hero, data: data})
      .then((list)=> {
        this.getAllProfiles();
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  searchHandler(playerOneName, playerTwoName, hero, save){
    console.log(save)
    axios.get(`https://ow-api.com/v1/stats/pc/us/${playerOneName}/heroes/${hero}`)
      .then((playerInfo) => {
        console.log(playerInfo.data.quickPlayStats.careerStats[hero])
        this.setState({
          hero: hero,
          playerOne: playerOneName,
          playerOneStats: playerInfo.data.quickPlayStats.careerStats[hero]
        })
        if(save){
          this.saveData(playerOneName, hero, playerInfo.data.quickPlayStats.careerStats[hero])
        }
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get(`https://ow-api.com/v1/stats/pc/us/${playerTwoName}/heroes/${hero}`)
      .then((playerInfo) => {
        console.log(playerInfo.data.quickPlayStats.careerStats[hero])
        this.setState({
          hero2: hero,
          playerTwo: playerTwoName,
          playerTwoStats: playerInfo.data.quickPlayStats.careerStats[hero],

        })
        if(save){
          this.saveData(playerTwoName, hero, playerInfo.data.quickPlayStats.careerStats[hero])
        }
        this.getAllProfiles();
      })
      .catch((err) => {
        console.log(err)
      })

  }


  render(){
    return(
      <Wrapper>
        <Search searchHandler= {this.searchHandler}/>
        {this.state.allProfiles? <ListOfProfiles data = {this.state.allProfiles} changeHandler= {this.changeProfileHandler}/>:null}
        <PlayerStats>
        {this.state.playerOneStats === null? <span></span> : <StatsList name= {this.state.playerOne} hero= {this.state.hero} player={this.state.playerOneStats}/>}
        {this.state.playerTwoStats === null? <span></span> : <StatsList name= {this.state.playerTwo} hero= {this.state.hero2} player={this.state.playerTwoStats}/>}
        </PlayerStats>

      </Wrapper>
    )
  }

}

export default App;

const Wrapper = style.div`
padding: 4em;
background: #CDE6F5;
display: flex;
`
const PlayerStats = style.div`
padding: 4em;
background: white;
display: flex;
`