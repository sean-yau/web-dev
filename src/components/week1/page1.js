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

    usingVar() {
        var myVariable = 3;
        return myVariable;
    }

    usingLet() {
        let anotherVariable = "text";
        return anotherVariable;
    }

    usingConst() {
        const myConstant = false;
        return myConstant;
    }

    render() {
      return (
        <div>
          <div>This is a React Component</div>
          
          <div>{this.usingVar()}</div>
          
          <div>{this.usingLet()}</div>
          
          <div>{this.usingConst().toString()}</div>
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
                <h1 className="bp3-heading">Variables</h1>
                <p>There are three ways to declare a variable:</p>
                <blockquote className="bp3-blockquote">
                    var myVariable = 3;
                    </blockquote>
                <blockquote className="bp3-blockquote">
                    let anotherVariable = "text";
                    </blockquote>
                <blockquote className="bp3-blockquote">
                    const myConstant = false;
                    </blockquote>
                <p>There are five types of data a variable can hold:</p>
                <p><strong>String</strong>, <strong>Number</strong>, <strong>Boolean</strong>, <strong>Array</strong>, and <strong>Object</strong></p>
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
