import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    createJson(){
        const person = {name: "Sean", age: 27}
        person.name
        person['age']        
        return person
    }

    render() {
      return (
        <div>  
            <div>
                My name: {this.createJson().name}
            </div>
            <div>
                My age: {this.createJson().age}
            </div>
        </div>
      )
    }
  }
`.trim();

export default function page() {
    return (
        <>
            <h1 className="bp3-heading">JSON</h1>
            <p>JSON is short for "JavaScript Object Notation"</p>
            <p>It is a type of object consisting of 'Key' and 'Value' pairs, represented in strings</p>
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
