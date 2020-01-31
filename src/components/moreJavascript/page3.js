import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    arrowInForEach(){
        const array = [1, 2, 3, 4, 5, 6, 7]
        array.forEach(function (element) { console.log("normal function", element) })

        array.forEach((element => console.log("arrow function", element)))
    }

    arrowInMap() {
        const array = [1, 2, 3, 4, 5, 6, 7]

        const withFunction = array.map(function (element) { return element * 2 })
        console.log("function", withFunction)

        const withArrow = array.map((element) => { return element * 2 })
        console.log("arrow", withArrow)

        const shorterArrow = array.map(element => element * 2)
        console.log("short arrow", shorterArrow)
    }

    render() {
        {this.arrowInForEach()}
      return (
        <div>  
        </div>
      )
    }
  }
`.trim();

export default function page() {    
    return (
        <>
            <h1 className="bp3-heading">Arrow Function Syntax</h1>
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
