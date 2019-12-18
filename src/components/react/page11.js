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
            arrayOfThings: [2, "", "text", 0, true]
        }
    }
      
    render() {
      return (
        <div>
            <ol>
                {this.state.arrayOfThings.map((element, index) => {
                    if (element){
                      return <li key={index}>{element.toString()}</li>
                    }
                })}     
            </ol>  
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
