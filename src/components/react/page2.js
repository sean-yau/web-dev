import React, { Component } from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class MyComponent extends React.Component {
    render() {
      let aStringVariable = "some text" 
      return (
        <div>
            <div>
                One plus one equals {1 + 1}
            </div>
            <div>
                Right now, it is {new Date().toString()}
            </div>
            <div>
                Display {aStringVariable}
            </div>
        </div>
      )
    }
  }
`.trim();

export default class page extends Component {
    render() {
        return (
            <>
                <h1 className="bp3-heading">JSX</h1>
                <p>Elements that are rendered are neither strings nor actual HTML elements, but "JSX"</p>
                <p>Curly braces can be inserted into JSX which allows any JavaScript expression to be evaluated</p>
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
}
