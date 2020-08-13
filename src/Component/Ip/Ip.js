import React, {Component} from "react";
import 'materialize-css/dist/css/materialize.css';
import './Ip.css'

export default class Ip extends Component {
    state= {
        item: []
    }

    componentDidMount() {
        fetch( 'https://freegeoip.app/json/')
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
                            <td>Ip адресс:</td>
                            <td>{this.state.item.ip}</td>
                        </tr>
                        <tr>
                            <td>Страна:</td>
                            <td>{this.state.item.country_name}</td>
                        </tr>
                        <tr>
                            <td>Область:</td>
                            <td>{this.state.item.region_name}</td>
                        </tr>
                        <tr>
                            <td>Город:</td>
                            <td>{this.state.item.city}</td>
                        </tr>
                        <tr>
                            <td>Индекс:</td>
                            <td>{this.state.item.zip_code}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
