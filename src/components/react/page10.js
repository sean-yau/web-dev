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
            showComponent: false
        }
    }

    toggleComponent(){
        this.setState({
            showComponent: !this.state.showComponent
        })
    }

    render() {
      return (
        <div>
            <div>
                <button onClick={this.toggleComponent.bind(this)}>Toggle</button>
            </div>
            {this.state.showComponent &&
                <div>
                    Toggle Me
                </div>
            }
        </div>
      )
    }
  }
`.trim();

export default class page extends Component {
    render() {
        return (
            <>
                <h1 className="bp3-heading">Conditional Rendering</h1>
                <p>JavaScript conditionals can be used conditionally render components</p>
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
