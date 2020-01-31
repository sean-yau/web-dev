import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    constructor() {
        super()
        this.state = { 
            dataFromFetch: ""
        }
    }

    componentDidMount(){
        this.mockFetch()
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dataFromFetch: data.text
                })
            })
    }

    mockFetch() {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                var body = '{ "text": "Fetch Completed!" }';
                var init = { "status": 200 };
                var myResponse = new Response(body, init);
                resolve(myResponse)
            }, 2000)
        })
    }

    render() {
        return (
            <div>
                {this.state.dataFromFetch ?
                    <span>{this.state.dataFromFetch}</span>
                    :
                    <span>Loading...</span>
                }
            </div>
        )
    }
  }
`.trim();

export default function page() {
    return (
        <>
            <h1 className="bp3-heading">A Typical Fetch Example In React</h1>
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
