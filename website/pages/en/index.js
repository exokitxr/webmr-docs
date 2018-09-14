/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// b478286a56a224000f870ca6cb111082 - search api key

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="https://get.webmr.io">Download</Button>
            <Button href={docUrl('startHere.html', language)}>Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn" background="light">
    {[
      {
        content: 'Enjoy the eco-system of the web in VR/AR development',
        image: imgUrl('node-js-brands.svg'),
        imageAlign: 'top',
        title: 'Built in Javascript',

      },
      {
        content: 'Built without the overhead of Chrome\'s bloated packages.',
        image: imgUrl('tachometer-alt.svg'),
        imageAlign: 'top',
        title: 'Faster than Chrome at 3D VR/AR',
      },
    ]}
  </Block>
);

/*
const FeatureCallout = props => (
    <GridBlock align="center" layout="threeColumn" className="featuresRow"
      contents ={[
        {
          image: imgUrl('credit-card-front.svg'),
          imageAlign: 'top',
          title: 'Payment API',

        },
        {
          image: imgUrl('users.svg'),
          imageAlign: 'top',
          title: 'Multiplayer Infrastructure',
        },
        {
          image: imgUrl('hdd.svg'),
          imageAlign: 'top',
          title: 'Storage System API',
        },
      ]}
    />
);
*/

const LearnHow = props => (
  <Block>
    {[
      {
        content: 'Learn how to get started developing with Exokit with our comprehensive documentation.',
        image: imgUrl('user-graduate.svg'),
        imageAlign: 'right',
        className: 'featureIcon',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Get your hands dirty and start using Exokit for your VR/AR adventures.',
        image: imgUrl('hand-receiving.svg'),
        imageAlign: 'left',
        title: 'Make it Happen',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="light">
    {[
      {
        content: 'Windows, Mac, Linux we got you covered, iOS and Android are on the way!',
        image: imgUrl('boxes.svg'),
        imageAlign: 'right',
        title: 'Cross-Platform',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          {/*<FeatureCallout />*/}
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
