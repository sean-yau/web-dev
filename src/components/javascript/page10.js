import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    multiply(num1, num2) {        
        return num1 * num2;
    }

    divide(num1, num2){
        return num1 / num2;
    }

    modifyNumber(number){
        let anotherNumber = 8;
        let newNumber = this.multiply(number, anotherNumber)
        // 24
        newNumber = Math.round(this.divide(newNumber, 5))
        // 24 divide 5 = 4.8, then rounded to 5
        return newNumber
    }

    render() {
      return (
        <div>                   
          <div>Modify Number: {this.modifyNumber(3)}</div>
        </div>
      )
    }
  }
`.trim();
export default function page() {
    return (
        <>
            <h1 className="bp3-heading">More Complex Example</h1>
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
