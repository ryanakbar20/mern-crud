import React from 'react'
import Star from '../elements/Star'
import TestimonyAccent from '../assets/images/testimonial_frame.png'
import Button from '../elements/Button'
import Fade from 'react-reveal/Fade'

export default function Testimony({data}) {
    return (
        <Fade bottom>
        <section className="container">
            <div className="row  align-items-center">
                <div className="col-auto" style={{marginRight: 70}}>
                    <div className="testimonial-hero" style={{margin: '30px 0 0 30px'}}>
                        <img src={TestimonyAccent}
                             alt="testimony-frame"
                             className="position-absolute"
                             style={{margin: '-30px 0 0 -30px'}} />
                        <img src={data.imageUrl}
                             alt="testimonial"
                             className="position-absolute" />
                    </div>
                </div>
                <div className="col">
                    <h4 style={{marginBottom: 40}} className="text-gray-900">
                        {data.name}
                    </h4>
                    <Star value={data.rate} width={35}
                          height={35} spacing={6} />
                    <h5 className="h2 text-gray-900 my-3">
                        {data.content}
                    </h5>
                    <p className="text-gray-500 my-3">
                        {`${data.familyName}, ${data.familyOccupation}`}
                    </p>
                    <Button isPrimary 
                            hasShadow 
                            type="link" 
                            className="btn px-5" 
                            href={`/testimonial/${data._id}`}>
                        Read Their Story
                    </Button>
                </div>
            </div>
        </section>
        </Fade>
    )
}
