import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    forExample(){
        // counter variable; termination condition; final expression        
        for(let number = 0; number < 20; number++){
            console.log(number);
        }
    }

    whileExample(){
        let number = 0
        while(number < 10){
            console.log(number);
            number++;
        }
    }

    doWhileExample(){
        let keepGoing = false
        do {
            console.log("Doing stuff");
        } while (keepGoing);
    }

    render() {
      return (
        <div>                   
          <div>{this.forExample()}</div>
        </div>
      )
    }
  }
`.trim();
export default function page() {
    return (
        <>
            <h1 className="bp3-heading">Loops</h1>
            <p>Loops are used to repeat code until some condition has been fulfilled</p>
            <p>There are three main ways to create loops:</p>
            <blockquote className="bp3-blockquote">
                for loop
            </blockquote>
            <blockquote className="bp3-blockquote">
                while
                    </blockquote>
            <blockquote className="bp3-blockquote">
                do...while
            </blockquote>
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
