import React from 'react'
import kelvinToCelsius from 'kelvin-to-celsius'

const Weather = (props) => {
    // {document.body.style.backgroundImage = "url('https://spillwords.com/wp-content/uploads/2018/09/When-The-Black-Clouds-Forgot-To-Smile-spillwords.jpg')"}
    return (
        <div className="container mb-5">

            <div className="row">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4">
                    <div className="mt-5 shadow-lg px-4 py-4 rounded  bg-light">
                        <div>Weather details for {props.data.name}</div>
                        <div>
                            <div className="py-3"><span id={"degree"}><b>{kelvinToCelsius(props.data.main.temp)}°c</b></span><span id={"status"}>{props.data.weather[0].description}</span></div>
                            <div className="row">
                                <div className="col-lg-6 py-3">Min <span><b>{kelvinToCelsius(props.data.main.temp_min)}°c</b></span> </div>
                                <div className="col-lg-6 py-3">Max <span><b>{kelvinToCelsius(props.data.main.temp_max)}°c</b></span> </div>
                                <div className="col-lg-6 py-3">Humidity <span><b>{props.data.main.humidity}%</b></span> </div>
                                <div className="col-lg-6 py-3">Pressure <span><b>{props.data.main.pressure}</b> hPa</span> </div>
                            </div>
                        </div>
                        <button onClick={()=>{window.location.reload()}} className="form-control bg-dark text-light mt-4 py-3"><i class="fas fa-arrow-circle-left" id={"arrow"}></i> Go back</button>
                    </div>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
        </div>
    )
}

export default Weather
