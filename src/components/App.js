import React from "react"
import './App.css'
import Nav from './Nav'
import Footer from './Footer'
import Cards from "./Cards"

const App = () => {
    const MoviesList = [
    {
        "title": "The Red Notice",
        "description": "d Notice is a 2021 American action comedy film written, directed, and produced by Rawson Marshall Thurber. Dwayne Johnson, who also served as a producer, ",
        "rating":"3/5",
        "src": "https://image.tmdb.org/t/p/original/70QFRxC05JfxGIN3ajQPaV8wGvy.jpg",
        "link": "https://www.netflix.com/sa/login"
    },
    {
        "title": "Free Guy",
        "description": "It tells the story of a bank teller who discovers that he is a non-player character in a massively multiplayer online game and partners with a player to find evidence that a gaming company's CEO stole the player's game's source code.",
        "rating":"4/5",
        "src": "https://images.indianexpress.com/2021/08/free-guy-1200.jpg",
        "link": "https://www.netflix.com/sa/login"
    },
  
    {
        "title": "Jumanji",
        "description": "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
        "rating":"4.5/5",
        "src": "https://albiladdaily.com/wp-content/uploads/2019/07/%D8%AC%D9%88%D9%85%D8%A7%D9%86%D8%AC%D9%8A.jpg",
        "link": "https://www.netflix.com/sa/login"
    },




];






return (<div className="main">
   <Nav/>
    {/* {cards} */}
    <Cards props={MoviesList}/>
    <Footer/>


    
    
    </div>)  //return to show the data.
};

export default App;