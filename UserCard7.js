import React from 'react'

export default function UserCard(props) {
    return (
        <div>
            <img src={props.myUser[0].Avatar}/>
            <h2>{props.myUser[0].Name}</h2>
            <label for="location">Location:</label>
            <h3>{props.myUser[0].Location}</h3>
            <label for="foodType">Food Type:</label>
            <h3> {props.myUser[0].FoodType}</h3>
            <label for="age">Age:</label>
            <h3> {props.myUser[0].Age}</h3>
            <label for="likes">Likes:</label>
            <h3>{props.myUser[0].Likes}</h3>
            <label for="twitter">Twitterlink:</label>
            <h3>{props.myUser[0].TwitterLink}</h3><br></br>
            <img src={props.myUser[0].Avatar}/>
            <h2>{props.myUser[1].Name}</h2>
            <label for="location">Location:</label>
            <h3>{props.myUser[1].Location}</h3>
            <label for="foodType">Food Type:</label>
            <h3> {props.myUser[1].FoodType}</h3>
            <label for="age">Age:</label>
            <h3> {props.myUser[1].Age}</h3>
            <label for="likes">Likes:</label>
            <h3>{props.myUser[1].Likes}</h3>
            <label for="twitter">Twitterlink:</label>
            <h3>{props.myUser[1].TwitterLink}</h3>
        </div>
    )
}