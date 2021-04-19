import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div id="header">
            <div id="header-logo">
              <a href="http://www.nationallobsterhatchery.co.uk" className="h-logo">
                <img src="images/header.png" />
              </a>
              <h1 className="h-logo">News</h1>
              <div style={{clear: 'both'}} />
            </div>
            <div id="header-menu">
          <div id="h-menu">
            <ul className="h-ul-menu">
              <li><a href="index.html#">Chính trị</a></li>
              <li><a href="#">Xã hội</a></li>
              <li><a href="#">Thế giới</a>
                <ul>
                  <li><a href="#">Sub menu</a></li>
                  <li><a href="#">Sub menu</a></li>
                </ul>
              </li>
              <li><a href="#">Kinh tế</a></li>
              <li><a href="#">Thể thao</a></li>
              <li><a href="#">Văn Hóa</a></li>
              <li><a href="#">Giải trí</a></li>
              <li><a href="#">Pháp Luật</a></li>
              <li><a href="#">Du lịch</a></li>
            </ul>
            <div style={{clear: 'both'}} />
          </div>
        </div>
        <div style={{clear: 'both'}} />
      </div>
      
        );
    }
}

export default Header;