import React, { Component } from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class ParentComponent extends React.Component {
    constructor() {
        super()
        this.state = { 
            animal: "dog"
        }
    }

    change(){
        this.setState({
            animal: "cat"
        })        
    }
      
    render() {
      return (
        <div>
            <div>
                <button onClick={this.change.bind(this)}>Change</button>
            </div>
            <ChildComponent animal={this.state.animal} />
        </div>
      )
    }
  }

  class ChildComponent extends React.Component {
    constructor() {
        super()
        this.state = { 
            changed: false
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.animal !== this.props.animal){
            this.setState({
                changed: true
            })  
        }
    }
    render() {
      return (
        <div>
            The animal has {this.state.changed ? "changed" : "not changed"}
        </div>
      )
    }
  }

  render(
      <ParentComponent />
  )
`.trim();

export default class page extends Component {    
    render() {
        return (
            <>
                <h1 className="bp3-heading">componentDidUpdate</h1>
                <p>Called after a state change or prop change in the component</p>
                <p>Can be useful for re-rendering a component when it receives new props as a prop change will not trigger a re-render</p>
                <div className="liveWrapper">
                    <LiveProvider code={code} noInline>
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
