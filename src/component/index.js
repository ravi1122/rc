import React,{Component} from "react";
import ReactDOM, { render } from "react-dom";
import Home  from "./app/Home";


class App extends Component {
    state={
        home:[
            {name:'ravi ranjan', place:'Nawada'},
            {name:'Suresh', place:'Patna'},
            {name:'Puja', place:'Bihar'}
        ]
    }

    changeState=()=>{
        this.setState({
            Home:[
                {name:'Kiran', place:'Delhi'},
                {name:'Deepak', place:'Bangalore'},
                {name:'MANOJ', place:'Mumbai'}
            ]
        })
    }
    render() {
        return (
           <div>
               <button onClick={this.changeState.bind(this,"ravi ranjan")}>Click Here</button>
               <p>Let's start throught the react</p>
               <h1>ravi ranjan</h1>
               <Home name="ravi ranjan" place="Bihar"/>
               <Home name="Suresh" place="Gujrat"/>
               <Home name="Nikita" place="Patna"/>
           </div>

        );
    }
}
render(<App />, document.getElementById("app"));