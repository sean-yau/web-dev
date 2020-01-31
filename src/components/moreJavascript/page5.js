import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    chainingThens() {
        this.mockFetch()
            .then(response => response.json())
            .then(data => { console.log(data) })
    }

    /* 
    in Create-React-App
    async usingAwait(){
        const response = await this.mockFetch()
        const data = await response.json()
        console.log(data)
    }
    */

    mockFetch() {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                var body = '{ "text": "Complete" }';
                var init = { "status": 200 };
                var myResponse = new Response(body, init);
                resolve(myResponse)
            }, 2000)
        })
    }

    render() {
        {this.chainingThens()}
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
            <h1 className="bp3-heading">Resolving Promises</h1>
            <p><code>.then()</code> is used to wait for a Promise to resolve</p>
            <p>Alternatively, <code>async</code> and <code>await</code> can be used</p>
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
