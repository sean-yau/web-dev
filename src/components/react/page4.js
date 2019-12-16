import React, { Component } from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class ParentComponent extends React.Component {
    render() {
      return (
        <div>
            Boxes:
            <ChildComponent contents="apples" />
            <ChildComponent contents="pears" />
            <ChildComponent contents="mangos" />
        </div>
      )
    }
  }
  
class ChildComponent extends React.Component {
    render() {
      return (
        <div>
            Box full of {this.props.contents}
        </div>      
      )
    }
}

render(
  <ParentComponent />
)
`.trim();

export default class page extends Component {
    render() {
        return (
            <>
                <h1 className="bp3-heading">React Props</h1>
                <p>React Components can accept inputs called "props" (properties). This is similar to function arguments, or HTML attributes.</p>
                <p>They can be used to pass data from a parent component to a child component</p>
                <div className="liveWrapper">
                    <LiveProvider code={code} noInline>
                        <LiveEditor className="liveEditor"/>
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
