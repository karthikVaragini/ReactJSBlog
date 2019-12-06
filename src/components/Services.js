import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: "Loyal 9 Cocktails - 9% alcohol, 100% deserved." + 
                "Gluten-free canned cocktails made with real fruit."
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "Next Generation Hiking Trail Maps. ... Get the Free App. Add your favorite trails."+
                 "Join the thousands of hikers who've shared their most treasured trails"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle Van",
                info: "SuperShuttle Van ... Luxury car service ideal for business travel. ... every ride; " + 
                "Member only discounts and offers; Faster check out & personalized trip information."
            },{
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: "A common one is that alcohol-free beers must contain special ingredients to help them mimic the taste, aroma, appearance and body of regular beer." + 
                "Another is that alcohol-free beer always contains more sugar than its full-strength equivalent."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    }

                    )}

                </div>
            </section>
        )
    }
}
