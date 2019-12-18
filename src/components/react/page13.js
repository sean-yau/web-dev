import React, { Component } from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    constructor() {
        super()
        this.state = { 
            date: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }
      
    render() {
      return (
        <div>
            The current date is: {this.state.date.toLocaleString()} 
        </div>
      )
    }
  }
`.trim();

export default class page extends Component {
    render() {
        return (
            <>
                <h1 className="bp3-heading">Lifecycle Methods</h1>
                <p>React class components have access to a number of "lifecycle methods". These are automatically called throughout the lifecycle of the component, for example, when the component is first rendered, or updated with new props.</p>
                <p>The most common methods are:</p>
                <ul>
                    <li><code>componentDidMount()</code></li>
                    <li><code>componentDidUpdate(prevProps, prevState)</code></li>
                    <li><code>componentWillUnmount()</code></li>
                </ul>
                <div className="liveWrapper">
                    <LiveProvider code={code}>
                        <LiveEditor className="liveEditor" />
                        <div className="liveResult">
                            <LiveError />
                            <LivePreview />
                        </div>
                    </LiveProvider>
                </div>
            </>
        )
    }
}
