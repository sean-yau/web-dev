import React, { Component } from 'react'
import { Navbar, Button } from "@blueprintjs/core";
import Index from './Index'
import Javascript from './javascript'
import ReactContent from './react'

export default class Home extends Component {
    state = {
        page: "index"
    }

    displayPage() {
        switch (this.state.page) {
            case "index":
                return <Index changePage={this.changePage} />
            case "javascript":
                return <Javascript />
            case "react":
                return <ReactContent />
            default:
                return <Index />
        }
    }

    changePage = (page) => {
        this.setState({
            page
        })
    }

    render() {
        return (
            <div>
                <Navbar className="bp3-dark">
                    <Navbar.Group>
                        <Button className="bp3-minimal" icon="home" text="Index" onClick={() => { this.changePage("index") }} />
                    </Navbar.Group>
                </Navbar>
                <div className="mainContent">
                    {this.displayPage()}
                </div>
            </div>
        )
    }
}
