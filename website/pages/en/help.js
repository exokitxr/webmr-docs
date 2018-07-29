/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc) {
  return siteConfig.baseUrl + 'docs/' +  doc;
}

function pageUrl(page) {
  return siteConfig.baseUrl + page;
}

class Help extends React.Component {
  render() {
    let language = this.props.language || '';
    const supportLinks = [
      {
        content: `Learn more using the [Documentation](${docUrl('whatisexo.html')}) on this site.`,
        title: 'Browse the Docs',
      },
      {
	      content: `[Ask questions](${docUrl('Support.html')}) about the documentation and project. Stay up to date and find out [what is new](https://medium.com/webmr) with the project.`,
        title: 'Join the community',
      },
      {
        content: `At our [GitHub repo](https://github.com/webmixedreality/exokit) browse and sumbit [issues](https://github.com/webmixedreality/exokit/issues) or [pull requests](https://github.com/webmixedreality/exokit/pulls) for bugs you find or any new features you may want implemented. Be sure to check out [how to contribute.](${docUrl('contribute.html')})`,
        title: 'GitHub',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Need help?</h1>
            </header>
            <p>This project is maintained by a dedicated group of people.</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
