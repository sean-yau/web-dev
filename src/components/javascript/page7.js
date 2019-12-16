import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    ternary() {
        let day = "Monday";
        return day === "Monday" ? "I hate Mondays" : "Some other day"
    }

    render() {
      return (
        <div>                    
          <div>Ternary: {this.ternary()}</div>
        </div>
      )
    }
  }
`.trim();
export default function page() {
    return (
        <>
            <h1 className="bp3-heading">Ternary Operator</h1>
            <p>The ternary operator is basically a short-hand for if-else</p>
            <p>"Ternary" means three operands</p>
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
