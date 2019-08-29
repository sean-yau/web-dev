import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    createObjects(){
        const dateObject = new Date();
        const aBigNumber = BigInt(65411651464165416)
        const noDuplicates = new Set([1,2,3,4,5])
        console.log(dateObject)
    }

    render() {
      return (
        <div>                   
          {this.createObjects()}
        </div>
      )
    }
  }
`.trim();

export default function page() {
    return (
        <>
            <h1 className="bp3-heading">Objects</h1>
            <p>An object is essentially a container for data</p>
            <p>Examples of built-in objects in JavaScript are:</p>
            <blockquote className="bp3-blockquote">
                Date, BigInt, Set
                </blockquote>
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
