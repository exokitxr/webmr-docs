/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('exokitEngine.html', this.props.language)}>
              Overview
            </a>
            <a href={this.docUrl('installation.html', this.props.language)}>
              Quickstart
            </a>
	    <a href={this.docUrl('useExokitEngine.html', this.props.language)}>
              User Guides
            </a>

            <a href={this.docUrl('devExokitEngine.html', this.props.language)}>
              Dev Guides
            </a>
            <a href={this.docUrl('terms.html', this.props.language)}>
              Legal
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
            <a
              href="https://www.twitch.tv/avaer"
              target="_blank"
              rel="noreferrer noopener">
              Twitch
            </a>
            <a href="https://discord.gg/Apk6cZN">Discord</a>
            <a href="https://join.slack.com/t/exokit/shared_invite/enQtNDI3NjcxNzYwMDIxLWU2NmFmOTEzMzk4NWNiYjRhMjVkYzcyNjg5YjUyMzZkYWM1ZGI4M2IwYWZiMjNlMTJjMDlkM2U3Y2JiNTc2M2Q">Slack</a>
            <a
              href="https://twitter.com/webmixedreality"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://webmr.io/blog">Blog</a>
            <a href="https://www.facebook.com/webmixedreality/">Facebook</a>
            <a href="https://www.instagram.com/exokitbrowser/?hl=en">Instagram</a>
            <a href="https://github.com/webmixedreality/exokit">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/webmixedreality/exokit/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
