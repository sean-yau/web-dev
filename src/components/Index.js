import React, { Component } from 'react'
import { Button } from "@blueprintjs/core";

export default class Index extends Component {
    render() {
        return (
            <div>
                <h1>Index</h1>
                <ol>
                    <li className="indexButton">
                        <Button minimal onClick={() => this.props.changePage("javascript")}>JavaScript Fundamentals</Button>
                    </li>
                    <li className="indexButton">
                        <Button minimal onClick={() => this.props.changePage("react")}>React Basics</Button>
                    </li>
                </ol>
            </div>
        )
    }
}
