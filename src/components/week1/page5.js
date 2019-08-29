import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    equals() {
        let number = 2;
        if (number === 2) {
            return "It's 2";
        } else {
            return "It's not 2"
        }
    }

    notEquals() {
        let food = "banana";
        if (food !== "apple") {
            return "Not hungry";
        }
    }

    withBooleans(){
        let food = "banana";
        let hungry = true;
        if(!hungry){
            return "Not hungry";
        } else if (food === "apple") {
            return "I'll take it";
        } else {
            return "Don't want it";
        }
    }

    conditionalOr() {
        let day = "Saturday";
        if (day === "Saturday" || day === "Sunday") {
            return "It's the weekend";
        }
        return "Weekday"
    }

    conditionalAnd() {
        let number = 5
        if (number > 0 && number <= 5) {
            return "It's between zero and five"
        }
        return "Some other number"
    }

    render() {
      return (
        <div>                    
          <div>Equals: {this.equals()}</div>

          <div>Not Equals: {this.notEquals()}</div>

          <div>With Booleans: {this.withBooleans()}</div>

          <div>Conditional OR: {this.conditionalOr()}</div>

          <div>Conditional AND: {this.conditionalAnd()}</div>
        </div>
      )
    }
  }
`.trim();
export default function page() {

    return (
        <>
            <h1 className="bp3-heading">Conditionals</h1>
            <p>Conditionals are used to test if an expression is true or false</p>
            <p>Different code can be run depending on the result</p>
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
