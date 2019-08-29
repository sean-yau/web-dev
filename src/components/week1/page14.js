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
    standardForExample(){
        const numbers = [0,1,2,3,4,5,6,7,8,9]
        let newArray = []
        for(let index = 0; index < numbers.length; index++){
            numbers[index]
            newArray.push(numbers[index])
        }
        return newArray
    }

    forInExample(){
        const numbers = [0,1,2,3,4,5,6,7,8,9]
        for(let index in numbers){
            numbers[index]
            console.log(numbers[index])
        }
    }

    forOfExample(){
        const numbers = [0,1,2,3,4,5,6,7,8,9]
        for(let number of numbers){
            number
            console.log(number)
        }
    }

    forEachExample(){
        const numbers = [0,1,2,3,4,5,6,7,8,9]
        numbers.forEach((number, index)=>{
            number
            console.log(number, index)
        })
    }

    render() {
      return (
        <div>                   
          <div>{this.standardForExample().map((element)=><p>{element}</p>)}</div>
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
                <h1 className="bp3-heading">Looping through Arrays</h1>
                <p>There are four ways to iterate through an array:</p>
                <blockquote className="bp3-blockquote">
                    Standard for loop
                    </blockquote>
                <blockquote className="bp3-blockquote">
                    for...in
                    </blockquote>
                <blockquote className="bp3-blockquote">
                    for...of
                    </blockquote>
                <blockquote className="bp3-blockquote">
                    .forEach()
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
