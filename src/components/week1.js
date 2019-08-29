import React, { Component } from 'react'
import { Button, ProgressBar } from "@blueprintjs/core";
import Page1 from './week1/page1';
import Page2 from './week1/page2';
import Page3 from './week1/page3';
import Page4 from './week1/page4';
import Page5 from './week1/page5';
import Page6 from './week1/page6';
import Page7 from './week1/page7';
import Page8 from './week1/page8';
import Page9 from './week1/page9';
import Page10 from './week1/page10';
import Page11 from './week1/page11';
import Page12 from './week1/page12';
import Page13 from './week1/page13';
import Page14 from './week1/page14';
import Page15 from './week1/page15';
import Page16 from './week1/page16';
import Page17 from './week1/page17';
import Page18 from './week1/page18';
import Page19 from './week1/page19';
import Page20 from './week1/page20';

export default class Week1 extends Component {
    state = {
        pageIndex: 0,
    }

    showPage() {
        switch (this.state.pageIndex) {
            case 0:
                return <Page1 />
            case 1:
                return <Page2 />
            case 2:
                return <Page3 />
            case 3:
                return <Page4 />
            case 4:
                return <Page5 />
            case 5:
                return <Page6 />
            case 6:
                return <Page7 />
            case 7:
                return <Page8 />
            case 8:
                return <Page9 />
            case 9:
                return <Page10 />
            case 10:
                return <Page11 />
            case 11:
                return <Page12 />
            case 12:
                return <Page13 />
            case 13:
                return <Page14 />
            case 14:
                return <Page15 />
            case 15:
                return <Page16 />
            case 16:
                return <Page17 />
            case 17:
                return <Page18 />
            case 18:
                return <Page19 />
            case 19:
                return <Page20 />
            default:
                return <div></div>
        }
    }

    render() {
        return (
            <>
                <div>
                    <ProgressBar stripes={false} intent="primary" value={this.state.pageIndex / 19} />
                </div>
                <div className="pageContent">
                    {this.showPage()}
                </div>
                <div>
                    {this.state.pageIndex > 0 &&
                        <Button icon="arrow-left" text="Previous" onClick={() => { this.setState({ pageIndex: this.state.pageIndex - 1 }) }} />
                    }
                    {this.state.pageIndex < 19 &&
                        <Button className="nextButton" rightIcon="arrow-right" text="Next" onClick={() => { this.setState({ pageIndex: this.state.pageIndex + 1 }) }} />
                    }
                </div>
            </>
        )
    }
}
