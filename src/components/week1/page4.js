import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {

    addition(){
        let number = 2;
        number += 3;
        return number;
    }

    increment() {
        let number = 0;
        number++;
        return number;
    }

    multiply(){
        let number = 2;
        number *= 3;
        return number;
    }

    render() {
      return (
        <div>                    
          <div>Addition: {this.addition()}</div>

          <div>Increment: {this.increment()}</div>

          <div>Multiplication: {this.multiply()}</div>
        </div>
      )
    }
  }
`.trim();
export default function page() {
    return (
        <>
            <h1 className="bp3-heading">Compound Operators</h1>
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
