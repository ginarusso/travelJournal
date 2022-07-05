import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App() {
     const cardElements = data.map(cardsData => {
            return <Card 
            key={cardsData.id}
            title={cardsData.title}
            location={cardsData.location}
            googleMapsUrl={cardsData.googleMapsUrl}
            startDate={cardsData.startDate}
            endDate={cardsData.endDate}
            description={cardsData.description}
            imageUrl={cardsData.imageUrl}
            />
        }) 
    return (
        <div>
            <Header />
            {cardElements}
        </div>
    )
}

// <Hero />
//             <section className="cards-list">
//                 {cards}
//             </section>


// const cards = data.map(item => {
//         return (
//             <Card
//                 key={item.id}
//                 {...item}
                
//             />
//         )
//     }) 
