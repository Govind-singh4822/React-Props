import React from "react";
import Card from "./Card";
import contacts from "../contacts"; 
import Avatar from "./Avatar";


function App(){
    return(
        <div>
        <h1 className="heading">My Contacts</h1>
        <Avatar
            img="https://www.google.com/imgres?imgurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F02%2F45%2F56%2F35%2F360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fin%2Fsearch%2Fimages%3Fk%3Dman%2520face%2520front&tbnid=WyOZ18-3piSqZM&vet=12ahUKEwi3yNWcu-f4AhVQjNgFHQyLDr8QMygBegUIARDtAQ..i&docid=v0msAK7IdyXLpM&w=540&h=360&q=face%20images&hl=en&client=safari&ved=2ahUKEwi3yNWcu-f4AhVQjNgFHQyLDr8QMygBegUIARDtAQ"
        />
        <Card 

                name={contacts[0].name}
                img={contacts[0].imgUrl}
                tel={contacts[0].tel}
                email={contacts[0].email}

        /> 

        <Card 

        name={contacts[1].name}
        img={contacts[1].imgUrl}
        tel={contacts[1].tel}
        email={contacts[1].email}

/> 
        </div>
    );
}
export default App;  