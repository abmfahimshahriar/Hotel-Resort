import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';


export default class Services extends Component {
    state = {
        services : [
            {
                icon: <FaCocktail/>,
                title: "Free cocktails",
                info: "some info about cocktail"
            },
            {
                icon: <FaHiking/>,
                title: "Free Hiking",
                info: "some info about Hiking"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free shuttlevan",
                info: "some info about shuttlevan"
            },
            {
                icon: <FaBeer/>,
                title: "Free beers",
                info: "some info about beers"
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                {this.state.services.map((item,index) => {
                    return (
                    <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                    );
                })}
                </div>
            </section>
        )
    }
}
