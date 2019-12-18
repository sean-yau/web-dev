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
        // you can also bind functions here
        // this.increaseCount = this.increaseCount.bind(this)
    }

    increaseCount(){
        this.setState({
            count: this.state.count + 1
        })
    }

    /*
    This syntax can be used when using Create React App 
    increaseCountArrow = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    */ 

    render() {
      return (
        <div>
            Count is: {this.state.count}
            <div>
                <div>
                    <button onClick={this.increaseCount.bind(this)}>
                        Increase
                    </button>
                </div>
                <div>
                    <button onClick={() => { this.increaseCount() }}>
                        Also Increase
                    </button>
                </div>
                <div>
                    <button onClick={this.increaseCountArrow}>
                        Increase Again
                    </button>
                </div>
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

    showExample = () => {
        this.setState({
            showExample: !this.state.showExample
        })
    }

    render() {
        return (
            <>
                <h1 className="bp3-heading">Binding Functions</h1>
                <p>An Event (such as onClick) can call a function (the Event Handler)</p>
                <p>This function will not have access to <code>this</code>. There are two ways around this:</p>
                <ol>
                    <li>Use <code>bind</code></li>
                    <li>Use an Arrow Function</li>
                </ol>
                <Button text="Show Example" onClick={this.showExample} />
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
