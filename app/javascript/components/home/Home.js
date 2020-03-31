import React, { Component } from 'react'
import Jumbotron from './Jumbotron'

class Home extends Component {
    constructor(){
        super()
        this.state = {
         course_modules: [
            { id: 1, title: "1", description: "lorem", active: false },
            { id: 2, title: "2", description: "lorem", active: false },
            { id: 3, title: "3", description: "lorem", active: false },
            { id: 4, title: "4", description: "lorem", active: false }
          ]
        };
    }


    render() {
        return <div>
            <Jumbotron/>
        </div>;
    }
}

export default Home
 