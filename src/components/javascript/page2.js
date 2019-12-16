import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {

    usingVar() {
        var myVariable = "first";
        if (true) {
            var myVariable = "second";
        }
        return myVariable;
    }

    usingLet() {
        let anotherVariable = "first";
        if (true) {
            let anotherVariable = "second";
        }
        return anotherVariable;
    }

    render() {
      return (
        <div>          
          <div>Using var: {this.usingVar()}</div>
          
          <div>Using let: {this.usingLet()}</div>
        </div>
      )
    }
  }
`.trim();
export default function page() {
    return (
        <>
            <h1 className="bp3-heading">Difference between var and let</h1>
            <p>Declaring a variable as 'var' allows it to be used <strong>anywhere inside a function</strong> - function scope</p>
            <p>Declaring a variable as 'let' allows it to be used in the <strong>block only</strong> - block scope</p>
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
