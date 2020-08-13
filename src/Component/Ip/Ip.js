import React, {Component} from "react";
import 'materialize-css/dist/css/materialize.css';
import './Ip.css'

export default class Ip extends Component {
    state= {
        item: []
    }

    componentDidMount() {
        fetch( 'http://ip-api.com/json/')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    item: json
                })
            })
    }


    render() {
        return (
            <div className="Ip">
                <table className="bordered centered">
                    <tbody>
                        <tr>
                            <td>Ip адрес:</td>
                            <td>{this.state.item.query}</td>
                        </tr>
                        <tr>
                            <td>Страна:</td>
                            <td>{this.state.item.country}</td>
                        </tr>
                        <tr>
                            <td>Область:</td>
                            <td>{this.state.item.regionName}</td>
                        </tr>
                        <tr>
                            <td>Город:</td>
                            <td>{this.state.item.city}</td>
                        </tr>
                        <tr>
                            <td>Индекс:</td>
                            <td>{this.state.item.zip}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
