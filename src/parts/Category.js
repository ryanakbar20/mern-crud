import React from 'react'
import Button from '../elements/Button'

export default function Category({data}) {
    return data.map((category, index1) => {
        return <section className="container" key={`category-${index1}`}>
                  <h5>{category.name}</h5>
                  <div className="container-grid">
                    {
                        category.items.length === 0 ? (
                            <div className="col-auto align-items-center">
                                <h5>This Category Not Have Product</h5>
                            </div>
                        ) : (
                            category.items.map((item, index2) => {
                                return <div key={`category-${index1}-product-$`} className="item column-3 row-1">
                                          <div className="card">
                                              {
                                                  item.isPopular && (
                                                      <div className="tag">
                                                        Popular {" "}
                                                        <span className="font-weight-light">Choice</span>
                                                      </div>
                                                  )
                                              }
                                            <figure className="img-wrapper">
                                                <img src={item.imageUrl} 
                                                    alt={item.name} 
                                                    className="img-cover" />
                                            </figure>
                                            <div className="meta-wrapper">
                                                <Button type="link" className="d-block font-weight-medium link-streched">
                                                    <h6 className="text-gray-900">
                                                        {item.name}
                                                    </h6>
                                                </Button>
                                                <span className="text-gray-600">
                                                    {`${item.city}, ${item.country}`}
                                                </span>
                                            </div>
                                          </div>
                                       </div>
                            })
                        )
                    }
                  </div>
               </section>
    })
}
