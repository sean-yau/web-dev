import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

const code = `
class Component extends React.Component {
    bigJson(){
        const json = {
            "squadName": "Super hero squad",
            "homeTown": "Metro City",
            "formed": 2016,
            "secretBase": "Super tower",
            "active": true,
            "members": [
              {
                "name": "Molecule Man",
                "age": 29,
                "secretIdentity": "Dan Jukes",
                "powers": [
                  "Radiation resistance",
                  "Turning tiny",
                  "Radiation blast"
                ]
              },
              {
                "name": "Madame Uppercut",
                "age": 39,
                "secretIdentity": "Jane Wilson",
                "powers": [
                  "Million tonne punch",
                  "Damage resistance",
                  "Superhuman reflexes"
                ]
              },
              {
                "name": "Eternal Flame",
                "age": 1000000,
                "secretIdentity": "Unknown",
                "powers": [
                  "Immortality",
                  "Heat Immunity",
                  "Inferno",
                  "Teleportation",
                  "Interdimensional travel"
                ]
              }
            ]
          }
        return json
    }

    render() {
      return (
        <div>
            {this.bigJson().members[1].powers[2]}
        </div>
      )
    }
  }
`.trim();

export default function page() {
    return (
        <>
            <h1 className="bp3-heading">Big JSON Example</h1>
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
