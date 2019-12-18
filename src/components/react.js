import React, { Component } from 'react'
import { Button, ProgressBar, Popover, Menu, MenuItem, Position } from "@blueprintjs/core";
import Page1 from './react/page1';
import Page2 from './react/page2';
import Page3 from './react/page3';
import Page4 from './react/page4';
import Page5 from './react/page5';
import Page6 from './react/page6';
import Page7 from './react/page7';
import Page8 from './react/page8';
import Page9 from './react/page9';
import Page10 from './react/page10';
import Page11 from './react/page11';
import Page12 from './react/page12';
import Page13 from './react/page13';
import Page14 from './react/page14';
import Page15 from './react/page15';
import Page16 from './react/page16';
import Page17 from './react/page17';

export default class ReactContent extends Component {
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
        <Page17 />
    ]

    pageHeadings = [
        "React Components",
        "JSX",
        "Functions",
        "React Props",
        "React State",
        "Binding Functions",
        "Combining State and Props 1",
        "Combining State and Props 2",
        "Set State",
        "Conditional Rendering 1",
        "Conditional Rendering 2",
        "Conditional Rendering 3",
        "Lifecycle Methods",
        "componentDidUpdate",
        "Forms",
        "Dropdowns",
        "Multiple Inputs"
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
