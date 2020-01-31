import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    normalDeclaration(){
        this.age = 10

        this.normal = setInterval(function growUp() {
            // This growUp() function defines a new "this"
            this.age++;
            console.log("normal function", this.age)
            }, 1000);
    }

    arrowDeclaration(){
        this.age = 10

        this.arrow = setInterval(() => {
            // arrow function uses "this" in the arrowDeclaration() function
            this.age++;
            console.log("arrow function", this.age)
            }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.normal)
        clearInterval(this.arrow)
    }

    render() {
        {this.normalDeclaration()}
        {this.arrowDeclaration()}
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
            <h1 className="bp3-heading">Arrow Functions</h1>
            <p>Arrow Functions are a shorthand declaration of a function</p>
            <p>They do not have bindings to the <code>this</code> keyword, so it uses <code>this</code> from its enclosing scope</p>
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
