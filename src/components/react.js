import React, { Component } from 'react'
import { Button, ProgressBar } from "@blueprintjs/core";
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
        <Page11 />
    ]

    render() {
        return (
            <>
                <div>
                    <ProgressBar stripes={false} intent="primary" value={this.state.pageIndex / (this.pages.length - 1)} />
                </div>
                <div className="pageContent">
                    {this.pages[this.state.pageIndex]}
                </div>
                <div>
                    {this.state.pageIndex > 0 &&
                        <Button icon="arrow-left" text="Previous" onClick={() => { this.setState({ pageIndex: this.state.pageIndex - 1 }) }} />
                    }
                    {this.state.pageIndex < this.pages.length - 1 &&
                        <Button className="nextButton" rightIcon="arrow-right" text="Next" onClick={() => { this.setState({ pageIndex: this.state.pageIndex + 1 }) }} />
                    }
                </div>
            </>
        )
    }
}
