import React from 'react';
import style from 'styled-components';
var color = {
  ana:	"#718ab3",
  bastion:	"#7c8f7b",
  brigitte:	"#be736e",
  dVa:	"#ed93c7",
  doomfist:	"#815049",
  genji:	"#97ef43",
  hanzo:	"#b9b48a",
  junkrat:	"#ecbd53",
  lúcio:	"#85c952",
  mccree:	"#ae595c",
  mei:	"#6faced",
  mercy:	"#ebe8bb",
  moira:	"#803c51",
  orisa:	"#468c43",
  pharah:	"#3e7dca",
  reaper:	"#7d3e51",
  reinhardt:	"#929da3",
  roadhog:	"#b68c52",
  soldier76: "#697794",
  sombra:	"#7359ba",
  symmetra:	"#8ebccc",
  torbjörn:	"#c0726e",
  tracer:	"#d79342",
  widowmaker:	"#9e6aa8",
  winston:	"#a2a6bf",
  zarya:	"#e77eb6",
  zenyatta:	"#ede582",
}

const StatsList = (props) => {

var average = Object.keys(props.player['average'])
var best = Object.keys(props.player['best'])
    return(
      <div>
        <GamerTag>{props.name}</GamerTag>
        <Hero style= {{backgroundColor: color[props.hero]}}>{props.hero}</Hero>
        <div>{average.map((stat) => {
          return <Stats>{stat}: {props.player['average'][stat]}</Stats>
        })}</div>
        <div>{best.map((stat) => {
          return <Stats>{stat}: {props.player["best"][stat]}</Stats>
        })}</div>
      </div>
    )

}

const Stats = style.div`
padding: 15px;
background: white;
font-size: 20px;
`
const GamerTag = style.div`
padding: 15px;
font-size: 20px;
text-align: center;
`
const Hero = style.div`
  padding: 5px;
  font-size: 20px;
  text-align: center;
  font-variant: small-caps;
  font-family: cursive;
`
export default StatsList;

/*


*/