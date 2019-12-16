import React, { Component } from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import { Button } from "@blueprintjs/core";

const code = `
class MainComponent extends React.Component {  
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
            Count is: <NumberComponent count={this.state.count} />
            <ButtonComponent increaseCount={this.increaseCount.bind(this)} />
        </div>
      )
    }
  }

  class ButtonComponent extends React.Component {  
    render() {
      return (
        <div>
            <button onClick={this.props.increaseCount}>Increase</button>
        </div>
      )
    }
  }

  class NumberComponent extends React.Component {  
    render() {
        return (
          <span>
              {this.props.count}
          </span>
        )
      }
  }

  render (
      <MainComponent />
   )
  
`.trim();

export default class page extends Component {
    state = {
        showExample: false
    }

    render() {
        return (
            <>
                <h1 className="bp3-heading">Combining State and Props</h1>
                <p>Functions can be passed as props by using just the function name. This gives a child component access to a function that exists in the parent component</p>
                <p>Data can passed from a parent component to a child component via props</p>
                <Button text="Show Example" onClick={() => { this.setState({ showExample: !this.state.showExample }) }} />
                {this.state.showExample &&
                    <div className="liveWrapper">
                        <LiveProvider code={code} noInline>
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
