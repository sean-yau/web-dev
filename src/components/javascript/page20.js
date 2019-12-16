import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    spreadArrays(){
        let parts = ['shoulders', 'knees']; 
        let lyrics = ['head', ...parts, 'and', 'toes']; 
        return lyrics
    }

    spreadObjects(){
        let obj1 = { foo: 'bar', x: 42 };
        let obj2 = { foo: 'baz', y: 13 };

        return {...obj1, ...obj2}
    }

    render() {
      return (
        <div>  
            <div>
                Spread arrays: {this.spreadArrays().toString()}
            </div>
            <div>
                Spread objects: {JSON.stringify(this.spreadObjects())}
            </div>
        </div>
      )
    }
  }
`.trim();

export default function page() {
    return (
        <>
            <h1 className="bp3-heading">The Spread Operator</h1>
            <p>The spread operator "expands" iterable objects, such as arrays</p>
            <blockquote className="bp3-blockquote">
                ...array
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
