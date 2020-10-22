import React, { Component } from 'react';
import './Doing_list.css'
import loading from '../img/loading.svg'
class Doing_list extends Component{
    render(){
        const {job , onClick} = this.props;
        return(
            <div onClick={onClick}>
            <p className="Doing-content"> 
               <img className="image" src={loading} width="32"/>
               
                <p className="Contenting"> 
                    {job.job} 
                </p>
            </p>
        </div>
        )
    }



}

export default Doing_list;