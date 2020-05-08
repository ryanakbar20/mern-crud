import React from 'react'
import Breadcrumb from '../../elements/Breadcrumb'
import {Fade} from 'react-reveal'

export default function PageDetailTitle({data, breadcrumb}) {
    return (
        <Fade bottom>
        <section className="container">
            <div className="row align-item-center">
                <div className="col">
                    <Breadcrumb data={breadcrumb} />
                </div>
                <div className="col-auto text-center">
                    <h1 className="h2 text-gray-900">{data.name}</h1>
                    <span className="text-gray-500">
                        {data.city},  {data.country}
                    </span>
                </div>
                <div className="col">

                </div>
            </div>
        </section>
        </Fade>
    )
}
