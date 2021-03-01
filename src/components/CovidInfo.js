import React from 'react';
import Card from './Card'



const CovidInfo = (props) => {

    const {
        totalConfirmed,
        totalRecovered,
        totalDeaths,
        country
    } = props;

    return (
        <div>
            <div className="container">
                <h1 className="header">{country === '' ? 'Global' : country}</h1>


                <div className="row">
                    

                        
                            <Card className="card" >
                                <span className="card-header">Total Confirmed</span><br />
                                <span>{totalConfirmed}</span>
                            </Card>
                        
                            <Card className="card">
                            <span className="card-header">Total Recovered</span><br />
                                <span>{totalRecovered}</span>
                            </Card>
                        
                            <Card className="card">
                            <span className="card-header">Total Deaths</span><br />
                                <span>{totalDeaths}</span>
                            </Card>
                     
                </div>
            </div>
        </div>
    )
}

export default CovidInfo