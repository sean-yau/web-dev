import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
const code = `
class Component extends React.Component {

    addition() {
        let firstNumber = 3;
        let secondNumber = 5;
        let addition = firstNumber + secondNumber;
        return addition;
    }

    moreAddition(){
        return "hello" + " " + "world";
    }

    maths(){
        let number = 6;
        number = number / 3;
        number = number - 3;
        number = number * 4;
        return number;
    }

    opposite(){
        let boolean = false;
        boolean = !boolean;
        return boolean;
    }

    remainder(){
        let number = 6;
        return number%2
    }

    render() {
      return (
        <div>          
          <div>Addition: {this.addition()}</div>
          
          <div>Add strings: {this.moreAddition()}</div>

          <div>Some maths: {this.maths()}</div>

          <div>Change booleans: {this.opposite().toString()}</div>

          <div>Remainder: {this.remainder()}</div>
        </div>
      )
    }
  }
`.trim();
export default function page() {
    return (
        <>
            <h1 className="bp3-heading">Operators</h1>
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
