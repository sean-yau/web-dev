import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    functionWithParameters(number) {
        number += 5
        return number
    }

    noReturn(string){
        string = "It's mine now"
    }

    render() {
      return (
        <div>                    
          <div>With Parameters: {this.functionWithParameters(5)}</div>

          <div>No Return: {this.noReturn("My text")}</div>
        </div>
      )
    }
  }
`.trim();
export default function page() {
    return (
        <>
            <h1 className="bp3-heading">Functions</h1>
            <p>Functions are a way to reuse code, or common functionality</p>
            <p>They may or may not have paramers in parentheses: ()</p>
            <p>They may or may not return a value</p>
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
