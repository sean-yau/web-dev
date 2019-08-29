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
    parseExample(){
        const person = '{"name": "Sean", "age": 27}'
        return JSON.parse(person)
    }

    stringifyExample(){
        const person = {name: "Sean", age: 27}
        return JSON.stringify(person) 
    }

    assignExample(){
        const person = {name: "Sean", age: 27}
        const anotherPerson = Object.assign({},person)
        anotherPerson.name = "Paul"
        return anotherPerson
    }

    keysExample(){
        const person = {name: "Sean", age: 27}
        return Object.keys(person)
    }

    render() {
      return (
        <div>  
            <div>
                Parse: {this.parseExample().toString()}
            </div>
            <div>
                Stringify: {this.stringifyExample().age}
            </div>
            <div>
                Assign: {JSON.stringify(this.assignExample())}
            </div>
            <div>
                Keys: {this.keysExample().toString()}
            </div>
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
                <h1 className="bp3-heading">Working with JSON</h1>
                <blockquote className="bp3-blockquote">
                    JSON.parse() - parse a (valid) string into a JSON object
            </blockquote>
                <blockquote className="bp3-blockquote">
                    JSON.stringify() - converts JSON object into a string
             </blockquote>
                <blockquote className="bp3-blockquote">
                    Object.assign() - creates a copy of an object
             </blockquote>
                <blockquote className="bp3-blockquote">
                    Object.keys() - returns an array of the object's keys
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
