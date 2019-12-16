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
    constructor() {
        super()
        this.state = { 
            count: 0
        }
    }

    increaseCount(){
        this.setState({
            count: this.state.count + 1
        })
    }
      
    render() {
      return (
        <div>
            Count is: {this.state.count}
            <div>
                <button onClick={this.increaseCount.bind(this)}>Increase</button>
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
                <h1 className="bp3-heading">React State</h1>
                <p>All React components have a special property called "state", which belongs to the component</p>
                <p>State is modified by using this.setState()</p>
                <p>Any time the state object changes the component will re-render (in other words, the render method will be called)</p>
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
