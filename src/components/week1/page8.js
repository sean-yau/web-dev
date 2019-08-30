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
    falsey() {
        let numbers = [2,1,0,5]
        for(let number of numbers){
            if(number){
                // press F12 to view developer console
                console.log(number)
            }            
        }
    }

    truthy(){
        let truths = [6,"apple", new Date(), [], {}]
        for(let element of truths){
            if(element){
                console.log(element + " It's true!")
            }            
        }
    }

    render() {
      return (
        <div>                   
          {this.falsey()}
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
                <h1 className="bp3-heading">Truthy and Falsey</h1>
                <p>JavaScript evaluates certain non-boolean values as a boolean 'true' or 'false'</p>
                <p>These values will evaluate to 'false', and are therefore "falsey":</p>
                <blockquote className="bp3-blockquote">
                    null, undefined, 0, NaN, "" (an empty string)
            </blockquote>
                <p>What values are truthy?</p>
                <blockquote className="bp3-blockquote">
                    Literally everything else
            </blockquote>
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
