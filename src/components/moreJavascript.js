import React, { Component } from 'react'
import { Button, ProgressBar, Popover, Menu, MenuItem, Position } from "@blueprintjs/core";
import Page1 from './moreJavascript/page1';
import Page2 from './moreJavascript/page2';
import Page3 from './moreJavascript/page3';
import Page4 from './moreJavascript/page4';
import Page5 from './moreJavascript/page5';
import Page6 from './moreJavascript/page6';

export default class MoreJavascript extends Component {
    state = {
        pageIndex: 0,
    }

    pages = [
        <Page1 />,
        <Page2 />,
        <Page3 />,
        <Page4 />,
        <Page5 />,
        <Page6 />,
    ]

    pageHeadings = [
        "The Spread Operator",
        "Arrow Functions",
        "Arrow Function Syntax",
        "Asynchronous Functions",
        "Resolving Promises",
        "A Typical Fetch Example In React"
    ]

    getMenu = () => {
        return <Menu>
            {this.pageHeadings.map((heading, index) =>
                <MenuItem text={heading} onClick={() => { this.setState({ pageIndex: index }) }} disabled={this.state.pageIndex === index} />
            )}
        </Menu>
    }

    render() {
        return (
            <>
                <div>
                    <ProgressBar stripes={false} intent="primary" value={this.state.pageIndex / (this.pages.length - 1)} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    {this.state.pageIndex > 0 &&
                        <Button icon="arrow-left" text="Previous" onClick={() => { this.setState({ pageIndex: this.state.pageIndex - 1 }) }} />
                    }
                    <Popover className="jumpButton" content={this.getMenu()} position={Position.BOTTOM}>
                        <Button text="Jump to..." />
                    </Popover>
                    {this.state.pageIndex < this.pages.length - 1 &&
                        <Button className="nextButton" rightIcon="arrow-right" text="Next" onClick={() => { this.setState({ pageIndex: this.state.pageIndex + 1 }) }} />
                    }
                </div>
                <div className="pageContent">
                    {this.pages[this.state.pageIndex]}
                </div>
            </>
        )
    }
}
