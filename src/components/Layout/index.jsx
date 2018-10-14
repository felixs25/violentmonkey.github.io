import React from 'react';
import Helmet from 'react-helmet';
import Nav from '../Nav';
import Footer from '../Footer';
import '../../assets/scss/init.scss';

class Layout extends React.Component {
  render() {
    const {
      children,
      siteMeta: {
        title, subtitle, menu, footer,
      },
    } = this.props;
    return (
      <div className="layout">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        {menu && <Nav data={menu} />}
        {children}
        {footer && <Footer data={footer} />}
      </div>
    );
  }
}

export default Layout;
