import React from "react"
import Marvel from "./Images/Screenshot (8).png";
import Employee from "./Images/Employee.jpg.png";
import Fitness from "./Images/FitnessTracker.jpg.png";
import BasketballStats from "./Images/BasketballStat.jpg.png";
import BasketballQuestion from "./Images/BasketballQuestion.jpg.png";

function Project () {
    return (
        <div>
            <h1>Marvel Project</h1>
        <p><a href="https://robkellen.github.io/Marvel-Search-App/">https://robkellen.github.io/Marvel-Search-App/</a></p>
        <p><a href="https://github.com/robkellen/Marvel-Search-App">https://github.com/robkellen/Marvel-Search-App</a></p>
        <img src={Marvel} alt="marvel" style={{height:"400px"}}  />

          <h1>employee_directory</h1>
            <p><a href="https://github.com/Teojin02/employee_directory.git">employee_directory repository</a></p>
            <p><a href="https://objective-darwin-187ceb.netlify.app">employee_directory app</a></p>
            <img src={Employee} alt="employeePage" style={{height:"400px"}}></img>

           
            <h1>Fitness tracker</h1>
            <p><a href="https://github.com/Teojin02/fitness-traker.git">Fitness tracker repository</a></p>
            <img src={Fitness} alt="fitnesstracker" style={{height:"400px"}} />



            <h1>Basketball player stats</h1>
            <p><a href="https://github.com/Teojin02/basketball-player-stats.git">Basketball player stats</a></p>
            <p><a href=""></a></p>
            <img src={BasketballStats} alt="Basektballstats" style={{height:"400px"}} />

            <h1>Basketball Questions</h1>
            <p><a href="https://github.com/Teojin02/Basketball-Questions.git">Basketball respository</a></p>
            <img src={BasketballQuestion} alt="Basketballpicture" style={{height:"400px"}} />
        </div>
    )
}

export default Project;
