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
            username: 'Sean',
            flavor: 'coconut'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        });
      }
    
      handleSubmit(event) {
        alert(this.state.username + "'s favorite flavor is: " + this.state.flavor);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </label>
           </div>
           <div>
            <label>
              Pick your favorite flavor:
              <select name="flavor" value={this.state.flavor} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
                <option value="lychee">Lychee</option>
              </select>
            </label>
            </div>
            <div>
            <input type="submit" value="Submit" />
            </div>
          </form>
        );
      }
  }
`.trim();

export default class page extends Component {
    render() {
        return (
            <>
                <h1 className="bp3-heading">Multiple Inputs</h1>
                <p>A single <code>handleChange</code> event handler can be used for all inputs by using "computed property name" syntax</p>
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
