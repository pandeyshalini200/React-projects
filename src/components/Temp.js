import React, { useEffect, useState } from 'react';
import bg from './assets/bg.jpeg';

const Temp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=6bc361bfd8bbbc1e83df74563642fda9`
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search])

  return (
    <div>
      <div className='container mt-4'>
        <div className='row justify-content-center'>
          <div className="col-md-4">
            <div className="card text-white text-center border-0">
              <img src={bg} className="card-img" alt="..." height={500} />
              <div className="card-img-overlay">
                <form>
                  <div className="input-group mb-4 w-75 mx-auto">
                    <input type="text"
                      value={search}
                      className="form-control"
                      aria-label="search city" aria-describedby="basic-addon2"
                      onChange={(event) => { setSearch(event.target.value) }} />
                    <button type='submit'
                      className="input-group-text"
                      id="basic-addon2">
                      <i className='fas fa-search'></i></button>
                  </div>
                </form>
                <div className='bg-dark bg-opacity-50 py-3'>

                  {!city ? (
                    <p className='errorMsg'>No Data Found</p>
                  ) : (
                    <div>
                      <h2 className='card-title'>{search}</h2>
                      <hr />
                      <i className='fas fa-cloud fa-4'></i>
                      <h1 className='fw-border mb-5'>{city.temp}°Cel</h1>
                      <p className='lead fw-border mb-0'>cloud</p>
                      <p className="lead">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </p>
                    </div>
                  )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Temp;