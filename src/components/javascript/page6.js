import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    manyIfElse() {
        let number = 9;
        if (number === 1) {
            return "It's 1";
        } else if (number < 5) {
            return "It's less than 5"
        } else if (number !== 6) {
            return "Something that's not 6"
        }
    }

    switchStatement() {
        let food = "apple"
        switch (food) {
            case "banana":
                return "It's a banana"
            case "pear":
                return "It's a pear"
            case "apple":
                return "It's an apple"
            case "strawberry":
                return "It's a strawberry"
            default:
                return "No idea"
        }
    }

    anotherSwitch() {
        let number = 0
        switch (number) {
            case 0:
                number = 10
            case 1:
                number = 11
            case 2:
                number = 12
            case 3:
                number = 13
            default:
                number = 20
        }
        return number
    }

    render() {
      return (
        <div>                    
          <div>Many If Else: {this.manyIfElse()}</div>

          <div>Switch Statement: {this.switchStatement()}</div>

          <div>Another Switch: {this.anotherSwitch()}</div>
        </div>
      )
    }
  }
`.trim();
export default function page() {

    return (
        <>
            <h1 className="bp3-heading">More Conditionals</h1>
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
