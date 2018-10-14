import React from 'react';
import paypal from './assets/paypal.svg';
import alipay from './assets/alipay.svg';
import wechat from './assets/wechat.svg';
import qrAlipay from './assets/qr_alipay.png';
import qrWechat from './assets/qr_wechat.png';
import './style.scss';

const ALIPAY = 'ap';
const WECHAT = 'we';
const qrcodes = {
  [ALIPAY]: qrAlipay,
  [WECHAT]: qrWechat,
};

export default class Donate extends React.Component {
  state = {
    active: null,
  }

  handleShowAlipay = () => {
    this.setState({ active: ALIPAY });
  }

  handleShowWechat = () => {
    this.setState({ active: WECHAT });
  }

  render() {
    const { active } = this.state;
    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">Donate</h1>
            <div className="page__body autolink-fix">
              <ul>
                <li>Did you enjoy surfing the Internet with Violentmonkey?</li>
                <li>Yes, I do. And ...</li>
              </ul>
              <p>Wanna buy me a coffee?</p>
              <div className="donate">
                <a className="donate-group" href="https://www.paypal.me/gera2ld/5" target="_blank" rel="noopener noreferrer">
                  <img src={paypal} />
                </a>
                <a
                  className={`donate-group ${active === ALIPAY ? 'active' : ''}`}
                  href="#"
                  onClick={this.handleShowAlipay}
                >
                  <img src={alipay} />
                </a>
                <a
                  className={`donate-group ${active === WECHAT ? 'active' : ''}`}
                  href="#"
                  onClick={this.handleShowWechat}
                >
                  <img src={wechat} />
                </a>
              </div>
              {active && (
                <div className="donate-image" onClick={() => { this.setState({ active: null }); }}>
                  <img src={qrcodes[active]} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
