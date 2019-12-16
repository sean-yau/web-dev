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
      return (
        <div>
          <div>Return a div element</div>
          
          <span>Return a span element</span>
          
          <ol>
            <li>
                ordered list
            </li>
            <li>
                list item
            </li>
          </ol>
        </div>
      )
    }
  }
`.trim();

export default class page extends Component {
    state = {
        showExample: false
    }
    render() {
        return (
            <>
                <h1 className="bp3-heading">React Components</h1>
                <p>User interfaces are built in React by using pieces of code called "components"</p>
                <p>The most basic type of React component is the "Class" component. This uses a render method to return HTML elements to display.</p>
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
