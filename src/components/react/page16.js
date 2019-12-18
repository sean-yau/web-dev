import React, { Component } from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
            value: event.target.value
        });
      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite flavor:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
                <option value="lychee">Lychee</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
  }
`.trim();

export default class page extends Component {    
    render() {
        return (
            <>
                <h1 className="bp3-heading">Dropdowns</h1>
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
}
