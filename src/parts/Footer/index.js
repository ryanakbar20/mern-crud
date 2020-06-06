import React from "react";
import IconText from "../IconText";
import Button from "../../elements/Button";

export default function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-auto mr-4" style={{ width: 350 }}>
          <IconText />
          <p className="brand-tagline">
            We kaboom your beauty holiday instanly and memorable.
          </p>
        </div>
        <div className="col-2 mr-4">
          <h6 className="mt-2">For Beginners</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="/register">
                New Account
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/properties">
                Book a room
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/use-payments">
                Payments
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-2 mr-4">
          <h6 className="mt-2">Explore US</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="/careers">
                Our Careers
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/privacy">
                Privacy Policy
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="/terms">
                Term & conditions
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h6 className="mt-2">Connect US</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Button type="link" href="mailto:support@staycation.id">
                Support@staycation.id
              </Button>
            </li>
            <li className="list-group-item">
              <Button type="link" href="tel:+622122081996">
                021 - 2208 - 1996
              </Button>
            </li>
            <li className="list-group-item">
              <span>Staycation, Jakarta</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col text-center copyrights">
          Copyright 2020 | All rights reserved | Staycation
        </div>
      </div>
    </footer>
  );
}
