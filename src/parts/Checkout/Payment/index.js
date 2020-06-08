import React from 'react';
import Fade from 'react-reveal';
import { InputText, InputFile } from '../../../elements/Form';
import logoBca from '../../../assets/icons/bca.png';
import logoMandiri from '../../../assets/icons/mandiri.png';

export default function Payment(props) {
  const { itemDetails, data, checkout } = props;

  const tax = 10;
  const subTotal = itemDetails.price * checkout.duration;
  const grandTotal = (tax * subTotal) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row align-items-center justify-content-center">
          <div className="col-5 py-5 border-right" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-3">Transfer Pembayaran :</p>
              <p>Tax :{tax}%</p>
              <p>Sub total : ${subTotal} USD</p>
              <p>Total : ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBca} alt="logoBCA" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1675</dd>
                    <dd>Rian Akbar Ferdiansyah</dd>
                  </dl>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="logoMandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1675</dd>
                    <dd>Rian Akbar Ferdiansyah</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-auto py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer </label>
              <InputFile
                id="proofPayment"
                name="proofPayment"
                accept="image/*"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
