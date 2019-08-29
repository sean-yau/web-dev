import React, { Component } from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import { Button } from "@blueprintjs/core";

const code = `
class Component extends React.Component {
    pushExample(){
        const numbers = [0,1,2,3,4,5,6,7,8,9]
        numbers.push(10);
        numbers.push(11, 12);        
        return numbers;
    }

    includesExample(){
        const numbers = [0,1,2,3,4,5,6,7,8,9]
        return numbers.includes(5);
    }

    indexOfExample(){
        const numbers = ["zero", "one", "two", "three","four", "five"]
        return numbers.indexOf("three");
    }

    spliceExample(){
        const numbers = [0,1,2,3,4,5,6,7,8,9]
        // start index, number of elements to remove, elements to add (optional)
        numbers.splice(5,1)
        return numbers
    }

    mapExample(){
        const numbers = [0,1,2,3,4,5,6,7,8,9]
        return numbers.map((number)=>number*2)         
    }

    render() {
      return (
        <div>                   
          <div>{this.pushExample().toString()}</div>
        </div>
      )
    }
  }
`.trim();

export default class page extends Component {
    state = {
        showExample: false
    }
    
    render() {
        return (
            <>
                <h1 className="bp3-heading">Array Methods</h1>
                <p>Here are some common methods you can perform on an array:</p>
                <blockquote className="bp3-blockquote">
                    .push()  - Adds one or more elements to the end of an array
                </blockquote>
                <blockquote className="bp3-blockquote">
                    .includes()  - Check whether an array includes a certain element
                </blockquote>
                <blockquote className="bp3-blockquote">
                    .indexOf()  - Search the array for an element and return the first index where it occurs. Returns -1 if none found.
                </blockquote>
                <blockquote className="bp3-blockquote">
                    .splice()  - Remove or add elements from an array
                </blockquote>
                <blockquote className="bp3-blockquote">
                    .map()  - Creates a new array with the results of calling a function for each array element.
                </blockquote>
                <Button text="Show Example" onClick={() => { this.setState({ showExample: !this.state.showExample }) }} />
                {this.state.showExample &&
                    <div className="liveWrapper">
                        <LiveProvider code={code}>
                            <LiveEditor className="liveEditor" />
                            <div className="liveResult">
                                <LiveError />
                                <LivePreview />
                            </div>
                        </LiveProvider>
                    </div>
                }
            </>
        )
    }
}
