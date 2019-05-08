import React from 'react';
import style from 'styled-components';

const ListOfProfiles = (props) => {
    return(
      <Profiles>
        <SavedProfiles>{props.data.map((profile, index) => {
          return <div style= {{margin: '5px'}} id={index} onClick={(e)=>{props.changeHandler(e)}} player = {profile.battleTag} hero = {profile.hero}>{profile.battleTag}: {profile.hero}</div>
        })}</SavedProfiles>
      </Profiles>
    )

}

const Profiles = style.div`
padding: 4em;
background: white;
`

const SavedProfiles = style.div`
font-size: 20px;
margin:2px;
`

export default ListOfProfiles;