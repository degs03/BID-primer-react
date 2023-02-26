import { Component } from "react";
class listcomponent extends Component {
    render() { 
        const {Names, Apellido} = this.props;
        return (
            <>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Mt. Everest</li>
                    <li>Run a marathon</li>
                    <li>Feed the dogs</li>
                    <li>Mi nombre es {Names}, mi apellido es {Apellido}</li>
                </ul>

            </>
        );
    }
}

export default listcomponent;