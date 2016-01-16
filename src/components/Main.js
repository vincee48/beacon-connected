import 'normalize.css';
import 'styles/App.less';

import React from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Showcase from './ShowcaseComponent';
import Section from './SectionComponent';
import BrandName from './BrandNameComponent';

import routine from '../images/businessman243.png';
import skip from '../images/happy50.png';
import loyalty from '../images/savings1.png';
import relationship from '../images/group44.png';
import marketing from '../images/businessman259.png';
import savings from '../images/coin3.png';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />

        <div className="jumbotron">
          <div className="container">
            <h1 className="small">Improving your daily routine</h1>
            <p>Introducing your personal assistant <BrandName />. An iOS and Android application for the users. A platform for merchants to personally engage with their customers.</p>
          </div>
        </div>

        <Section header="Users">
          <div className="row">
            <div className="col-md-4">
              <Showcase headline="We get you" image={routine}>
                We all have our daily routine. At <BrandName />, we strive to assist you by understanding your routine through your everyday actions, yet being as unintrusive as possible.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Streamlined" image={skip}>
                Skip the queue by using <BrandName /> to streamline the order and payment process through proximity detection and get notified when it's ready.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Incentives" image={loyalty}>
                Earn incentives on our loyalty program every time you use <BrandName />. Even with a merchant that does not offer one!
              </Showcase>
            </div>
          </div>
        </Section>

        <Section header="Merchants">
          <div className="row">
            <div className="col-md-4">
              <Showcase headline="Improve relationships" image={relationship}>
                Get to know your customers by knowing their name and purchase history on <BrandName />.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Personal marketing" image={marketing}>
                Engage with your nearby customers with <BrandName /> at a personal level through beacon proximity. Let them know of your specials for the day.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Loyalty program" image={savings}>
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
