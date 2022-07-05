import React from "react"

export default function Card(props) {
    // console.log(props)
    return (
        <section className="card">
        <div>
            <img src={`../images/${props.imageUrl}`} className="card--photo" />
        </div>
        <div>
            <img src="../images/pin.png" className="card--pin" alt="" />
        </div>
        <div>
            <span className="card--location">{props.location}</span> <a href={props.googleMapsUrl} className="card--google-maps">View on Google Maps</a>
            <p className="card--title">{props.title}</p>
            <p className="card--date">{props.startDate} - {props.endDate}</p>
            <p className="card--description">{props.description}</p>
        </div>
        </section>
    )
}
