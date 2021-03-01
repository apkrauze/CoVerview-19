import React, { useEffect, useState } from 'react';
import './App.css';
import CovidInfo from './components/CovidInfo';
/* import LineGraph from './components/LineGraph';  */
/* import BarGraph from './components/BarGraph';
 */
import { Bar } from 'react-chartjs-2';
import axios from './axios';

function App() {

  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(false);
  const [covidInfo, setCovidInfo] = useState({});
  const [months, setMonths] = useState(365);
  const [country, setCountry] = useState('');


  useEffect(() => {
    setLoading(true);
    axios.get('/summary')
      .then(res => {
        setLoading(false);

        if (res.status === 200) {
          setTotalConfirmed(res.data.Global.TotalConfirmed);
          setTotalRecovered(res.data.Global.TotalRecovered);
          setTotalDeaths(res.data.Global.TotalDeaths);
          setCovidInfo(res.data);

        }
        console.log(res);
      })
      .catch(error => {
        console.log(error)
      })

  }, []);


  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2);
    /* const _date = d.getDate(); */
    return `${year}-${month}`
  }

  const countryHandler = (e) => {
    setCountry(e.target.value);
    const d = new Date();
    const to = formatDate(d)
    const from = formatDate(d.setDate(d.getDate() - 365));

    /* console.log(from, to); */

    getCovidMonthlyReport(e.target.value, from, to);
  }

  /* const monthsHandler = (e) => {
    setMonths(e.target.value);

    const d = new Date();
    const to = formatDate(d)
    const from = formatDate(d.setDate(d.getDate() - e.target.value));

    getCovidMonthlyReport(country, from, to);
  } */

  const getCovidMonthlyReport = (countrySlug, from, to) => {

    axios.get(`/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
      .then(res => {
        console.log(res);


        const covidDetails = covidInfo.Countries.find(country => country.Slug === countrySlug)


        setTotalConfirmed(covidDetails.TotalConfirmed);
        setTotalRecovered(covidDetails.TotalRecovered);
        setTotalDeaths(covidDetails.TotalDeaths);


      })
      .catch(error => {
        console.log(error);
      })
  }

  if (loading) {
    return <p>Just a second...!</p>
  }


  return (
    <div className="App">
      <div>
        <CovidInfo
          totalConfirmed={totalConfirmed}
          totalRecovered={totalRecovered}
          totalDeaths={totalDeaths}
          country={country}
        />
        <div>
          <br />
          <select value={country} onChange={countryHandler}>
            <option value="">Global</option>
            {
              covidInfo.Countries && covidInfo.Countries.map(country =>
                <option key={country.Slug} value={country.Slug}>{country.Country}</option>
              )
            }
          </select>
          <select  /* value={months} onChange={monthsHandler} */  >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        {/* <LineGraph
        
      />  */}
        {/* <BarGraph/> */}
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [totalConfirmed, totalRecovered, totalDeaths],
              },
            ],
          }}

        />
      </div>
    </div>
  );
}

export default App;
