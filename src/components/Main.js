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
import mobile from '../images/mobile.png';
import computer from '../images/pc.png';
import coffee from '../images/coffee.png';
import popcorn from '../images/popcorn.png';
import sale from '../images/sale.png';
import banner from '../images/bannerColor.jpg';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />

        <div className="jumbotron" style={{ backgroundImage: 'url(' + banner + ')' }}>
          <div className="container">
            <h1 className="small">Virtual engagement at the right place and the right time</h1>
            <p>
              Meet your personal assistant <BrandName />.
              An iOS and Android application designed for the users.
              A platform for merchants to personally engage with their customers.
            </p>
          </div>
        </div>

        <Section header="Rewarding you and making life a little easier">
          <Showcase>
            As creatures of habit, we do the same daily tasks over and over. Imagine if our smart phones could engage on our behalf and fulfil our needs. <BrandName /> takes the hassle out of daily tasks by helping us make purchases and pushing real-time offers that interest us.
          </Showcase>
        </Section>

        <Section header={<span>What is <BrandName /></span>}>
          <div className="row">
            <div className="col-md-6">
              <Showcase headline="Consumer Application" image={mobile}>
                A proximity aware mobile application that understands what offers interest you.
              </Showcase>
            </div>
            <div className="col-md-6">
              <Showcase headline="Merchant Application" image={computer}>
                An intuitive platform that allows merchants to display their products and promotions for the benefit of <BrandName /> users.
              </Showcase>
            </div>
          </div>
        </Section>

        <Section header="Use Case">
          <div className="row">
            <div className="col-md-4">
              <Showcase headline="Movie time" image={popcorn}>
                As I walk into my local movie theatre <BrandName /> engages with me. It displays the combo meal deals I enjoy and the current offers. I accept and order my usual without queing.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Coffee time" image={coffee}>
                Coffee. The first port of call Monday through Friday. I don’t know about you but I am a creature of habit and tend to go to the same cafes near the office. Seems we all have the same idea so i wait in line to place my order. That is now a thing of the past with <BrandName />. As I approach the cafe each morning <BrandName /> asks if i would like to place my usual order. I accept and pay for my coffee with the push of a button. I take a seat and sit back and wait for <BrandName /> to prompt me when my order is ready.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Sale time" image={sale}>
                As a merchant I want to let my customers know of all my current offers. Sign flippers are annoying and posters are too generic. I upload my current offers to <BrandName /> and clients who have an interest in thoseitems will recieve notifications when they enter my store.
              </Showcase>
            </div>
          </div>
        </Section>

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
                Earn incentives on our loyalty program every time you ask <BrandName /> to make a purchase.
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
