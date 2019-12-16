import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    forWithBreak(){
        for(let number = 0; number < 20; number++){
            if(number === 6){
                break;
            }
            console.log(number)
        }
    }

    forWithContinue(){
        for(let number = 0; number < 20; number++){
            if(number%2 === 0){
                continue;
            }
            console.log(number)
        }
    }

    render() {
      return (
        <div>                   
          <div>{this.forWithBreak()}</div>
        </div>
      )
    }
  }
`.trim();
export default function page() {
    return (
        <>
            <h1 className="bp3-heading">break and continue</h1>
            <p>A for loop can be terminated using the 'break' statement</p>
            <p>A 'continue' statement is used to skip the current iteration</p>
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
