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
            number: 2
        }
    }
    getValue(value){
        this.setState({
            number: value
        })
    }
    render() {
      return (
        <div>
            <CounterComponent send={this.getValue.bind(this)}/>
            <BoxComponent amount={this.state.number}/>
        </div>
      )
    }
  }
class CounterComponent extends React.Component {  
    constructor() {
        super()
        this.state = { 
            count: 5
        }
    }
    sendValue(){
        this.props.send(this.state.count)
    }
    increaseCount(){
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
      return (
        <div>            
            <div>
                I can give {this.state.count} apples
            </div>
            <div>
                <button onClick={this.increaseCount.bind(this)}>Increase</button>
                <button onClick={this.sendValue.bind(this)}>Send</button>
            </div>
        </div>
      )
    }
  }
class BoxComponent extends React.Component {  
    render() {
        return (
          <span>
              Give me {this.props.amount} apples
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
                <p>Data can passed from a parent component to a child component via props</p>
                <p>Data can passed from a child component to a parent component via a function</p>
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