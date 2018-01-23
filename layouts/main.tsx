import * as React from 'react'
import Meta from '../components/global/meta';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import { Fragment, StatelessComponent } from 'react';
import * as analytics from '../components/global/analytics';
import * as PropTypes from 'prop-types';

interface MainArgs {
  isHome? : boolean;
  title : string;
  description? : string;
  image? : string;
}

declare global {
  interface Window { GA_INITIALIZED: boolean; }
}

class Main extends React.Component<MainArgs, any> {

  static contextTypes = {
    pageUrl : PropTypes.string
  }

  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      analytics.init();
      window.GA_INITIALIZED = true;
    }
    analytics.logPageView();
  }

  render() {
    return <Fragment>
      <Meta pageUrl={this.context.pageUrl} pageTitle={this.props.title} pageDescription={this.props.description} pageImage={this.props.image} />
      <Header isHome={this.props.isHome} />
      { this.props.children }
      <Footer />
    </Fragment>;
  }
}

export default Main;