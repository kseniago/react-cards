import React from 'react';
import Avatar from './Image';
import Detail from './Detail';
import '../components/Card.css'

function Card(props) {
    return (
        <div className="card">
                <div className="top">
                    <h2>{props.name}</h2>
                    <Avatar img_src={props.img_src}/>
                </div>
                <div className="bottom">
                    <Detail detail={props.phone_num}/>
                    <Detail detail={props.email}/>
                </div>
        </div>
    );
}

export default Card;