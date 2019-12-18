import React, { Component } from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class OriginalComponent extends React.Component {

    functionInComponent(){
        return <span>function</span>
    }

    returnSomeJSX(){
        const jsx = <h1>Hello World</h1>
        return jsx
    }

    render() {
      return (
        <div>
            <div>
                I came from a {this.functionInComponent()}
            </div>
            <div>
                {this.returnSomeJSX()}
            </div>
            <div>
                You can also return <OtherComponent />
            </div>
        </div>
      )
    }
  }

  class OtherComponent extends React.Component {
    render() {
      return <span>other components</span>
    }
  }

  render(
      <OriginalComponent />
  )
`.trim();

export default class page extends Component {
    render() {
        return (
            <>
                <h1 className="bp3-heading">Functions</h1>
                <p>You can declare your own functions (and variables) in React components too</p>
                <p>Members declared within a React class are accessed using <code>this</code></p>
                <div className="liveWrapper">
                    <LiveProvider code={code} noInline>
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
}
