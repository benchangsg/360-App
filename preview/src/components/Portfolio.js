import React from 'react'
import PortfolioCard from './PortfolioCard'

const Portfolio = (props) => {
    return (
        <div>
            {props.data.map((data) => (
                <PortfolioCard 
                id= {data.id}
                title= {data.title}
                houseType= {data.houseType}
                address= {data.address}
                description= {data.description}
                />
            ))}
        </div>
    )
}

export default Portfolio
