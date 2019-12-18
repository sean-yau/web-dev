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
            count: 0
        }
    }

    increaseCount(){
        this.setState({
            count: this.state.count + 1
        })
    }
      
    render() {
    const url = "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/24170251/ING-apples-main.jpg"
      return (
        <div>
            Count is: {this.state.count}
            <div>
                {this.state.count < 10 ? 
                    <button onClick={this.increaseCount.bind(this)}>
                        Increase
                    </button>
                    :
                    <img height="200" src={url}/>
                }
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
                <h1 className="bp3-heading">Conditional Rendering</h1>
                <p>With a ternary operator</p>
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
