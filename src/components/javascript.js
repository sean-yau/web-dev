import React, { Component } from 'react'
import { Button, ProgressBar, Popover, Menu, MenuItem, Position } from "@blueprintjs/core";
import Page1 from './javascript/page1';
import Page2 from './javascript/page2';
import Page3 from './javascript/page3';
import Page4 from './javascript/page4';
import Page5 from './javascript/page5';
import Page6 from './javascript/page6';
import Page7 from './javascript/page7';
import Page8 from './javascript/page8';
import Page9 from './javascript/page9';
import Page10 from './javascript/page10';
import Page11 from './javascript/page11';
import Page12 from './javascript/page12';
import Page13 from './javascript/page13';
import Page14 from './javascript/page14';
import Page15 from './javascript/page15';
import Page16 from './javascript/page16';
import Page17 from './javascript/page17';
import Page18 from './javascript/page18';
import Page19 from './javascript/page19';

export default class Javascript extends Component {
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
        <Page7 />,
        <Page8 />,
        <Page9 />,
        <Page10 />,
        <Page11 />,
        <Page12 />,
        <Page13 />,
        <Page14 />,
        <Page15 />,
        <Page16 />,
        <Page17 />,
        <Page18 />,
        <Page19 />,
    ]

    pageHeadings = [
        "Variables",
        "Difference between var and let",
        "Operators",
        "Compound Operators",
        "Conditionals",
        "More Conditionals",
        "Ternary Operator",
        "Truthy and Falsey",
        "Functions",
        "More Complex Example",
        "Loops",
        "break and continue",
        "Arrays",
        "Looping through Arrays",
        "Array Methods",
        "Objects",
        "JSON",
        "Big JSON Example",
        "Working with JSON"
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
