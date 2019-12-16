import React, { Component } from 'react'
import { Button, ProgressBar } from "@blueprintjs/core";
import Page1 from './react/page1';

export default class ReactContent extends Component {
    state = {
        pageIndex: 0,
    }

    pages = [
        <Page1 />,
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
