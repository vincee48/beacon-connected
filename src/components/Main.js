import 'normalize.css';
import 'styles/App.less';

import React from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Showcase from './ShowcaseComponent';
import Section from './SectionComponent';
import BrandName from './BrandNameComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />

        <div className="jumbotron">
          <div className="container">
            <h1 className="small">Improving your daily routine</h1>
            <p>your personal assistant catered to your schedule</p>
          </div>
        </div>

        <Section header="Consumers">
          <div className="row">
            <div className="col-md-4">
              <Showcase headline="We get you">
                We all have our daily routine. We strive to assist by understanding your routine through your everyday actions, yet being as unintrusive as possible.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Streamlined">
                Skip the queue by using <BrandName /> to streamline the order and payment process through proximity detection and get notified when it's ready.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Incentives">
                Earn incentives on our loyalty program every time you use <BrandName />.
              </Showcase>
            </div>
          </div>
        </Section>

        <Section header="Merchants">
          <div className="row">
            <div className="col-md-4">
              <Showcase headline="Improve relationships">
                Get to know your customer by knowing their name and purchase history on <BrandName />.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Personal marketing">
                Engage with your customers at a personal level by notifying them of your specials.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Loyalty program">
                Customers purchasing from you through <BrandName /> will receive incentives through our program. Save the environment, and on overheads by not printing loyalty cards!
              </Showcase>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
