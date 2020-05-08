import React, { Component } from 'react'
import { Header, Category, Testimony, Footer, PageDetailDesc, 
         PageDetailHero, PageDetailTitle, BookingForm } from '../../parts'
import itemDetails from '../../json/itemDetails.json'

export default class DetailsPage extends Component {

    componentDidMount() {
        window.title = "Staycation | Details";
        window.scrollTo(0, 0);
    }

    render() {
        const listBreadcrumb = [
            {pageTitle: "Home", pageHref: ""},
            {pageTitle: "House Details", pageHref: ""}
        ];
        return (
            <div>
                <Header {...this.props} />
                <PageDetailTitle data={itemDetails} breadcrumb={listBreadcrumb} />
                <PageDetailHero data={itemDetails.imageUrls} />
                <section className="container">
                    <div className="row">
                        <div className="col-7">
                            <PageDetailDesc data={itemDetails.description} features={itemDetails.features} />
                        </div>
                        <div className="col">
                            <BookingForm itemDetails={itemDetails} />
                        </div>
                    </div>
                </section>
                <Category data={itemDetails.categories} />
                <Testimony data={itemDetails.testimonial} />
                <Footer />
            </div>
        )
    }
}
