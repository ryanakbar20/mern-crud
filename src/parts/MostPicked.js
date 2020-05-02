import React from 'react'
import Button from '../elements/Button'

export default function MostPicked(props) {
    return (
        <section ref={props.refMostPicked} className="container">
            <h6 className="mb-4">
                MostPicked
            </h6>
            <div className="container-grid">
                {
                    props.data.map((item, index) => {
                        return (
                            <div key={`mostpicked${index}`} className={`item column-4 ${index === 0? "row-2" : "row-1"}`}>
                                <div className="card card-featured">
                                    <div className="tag">
                                        ${item.price}
                                        <span className="font-weight-light"> Per {item.unit}</span>
                                    </div>
                                    <figure className="img-wrapper">
                                        <img src={item.imageUrl} 
                                             alt={item.name} 
                                             className="img-cover"/>
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button className="stretched-link d-block text-white"
                                                href={`properties/${item._id}`}
                                                type="link">
                                            <h6>
                                                {item.name}
                                            </h6>
                                        </Button>
                                        <span>{item.city}, {item.country}</span>
                                    </div>
                                </div>
                             </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
