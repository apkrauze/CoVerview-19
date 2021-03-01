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
            <div className="">
                <h1 className="header">{country === '' ? 'Global' : country}</h1>


                <div className="row">
                    {/* <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}> */}

                        <div style={{
                            background: 'rgba(0, 0, 255, 0.5)'
                        }}>
                            <Card className="card" >
                                <span className="card-header">Total Confirmed</span><br />
                                <span>{totalConfirmed}</span>
                            </Card>
                        </div>
                        <div style={{
                            background: 'rgba(0, 255, 0, 0.5)'
                        }}>
                            <Card className="card">
                            <span className="card-header">Total Recovered</span><br />
                                <span>{totalRecovered}</span>
                            </Card>
                        </div>
                        <div style={{
                            background: 'rgba(255, 0, 0, 0.5)'
                        }}>
                            <Card className="card">
                            <span className="card-header">Total Deaths</span><br />
                                <span>{totalDeaths}</span>
                            </Card>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default CovidInfo