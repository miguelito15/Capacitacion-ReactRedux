import React, {Component} from 'react';
/**************importamos para llamar a las acciones y utilizar metodo connect de redux ********/
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
/***********************************************************************************************/
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term : ''};
        //binds the context
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        //necesitamos llamar al action creator
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                placeholder="Type in the city"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} /> 

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secundary">Search</button>
                </span>
            </form>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar); 