import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    fetchData() {
        console.log("fetch started")
        this.mockFetch().then((response) => {
            console.log("Yay! " + response)
        });
        console.log("fetch complete?")
    }

    mockFetch() {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve("Success!")
            }, 2000)
        })
    }

    render() {
        {this.fetchData()}
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
            <h1 className="bp3-heading">Asynchronous Functions</h1>
            <p>Asynchronous functions do not return or complete immedaiately when they are called</p>
            <p>Examples are <code>fetch()</code>, and <code>setState()</code> in React</p>
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
