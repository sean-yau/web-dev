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
            text: "original"
        }
    }

    popupText(){
        alert(this.state.text)
    }

    noCallBack(){
        this.setState({
            text: "modified"
        })
        this.popupText()
    }

    withCallBack(){
        this.setState({
            text: "modified"
        }, this.popupText)
    }

    render() {
      return (
        <div>
            <div>
                <button onClick={this.noCallBack.bind(this)}>No Callback</button>
            </div>
            <div>
                <button onClick={this.withCallBack.bind(this)}>With Callback</button>
            </div>
        </div>
      )
    }
  }
`.trim();

export default class page extends Component {
    render() {
        return (
            <>
                <h1 className="bp3-heading">Set State</h1>
                <p><code>setState()</code> is <b>asynchronous</b>, in other words, it does not happen immediately</p>
                <p><code>setState()</code> has a callback function which allows you to execute a function after <code>setState()</code> is complete</p>
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
