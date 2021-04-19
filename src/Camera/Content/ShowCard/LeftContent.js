import React, { Component } from 'react';

class LeftContent extends Component {

    render() {
        return (
            <div id="left-content">
        <h1>Danh mục</h1>
        <ul className="drop">
          <li><a href="#">Quân sự</a></li>
          <li><a href="#">Gia đình</a></li>
          <li><a href="#">Văn hóa</a>
            <ul className="drop">
              <li><a href="#">Menu item 3.1</a></li>
              <li><a href="#">Menu item 3.2</a></li>
              <li><a href="#">Menu item 3.3</a></li>
              <li><a href="#">Menu item 3.4</a>
                <ul className="drop">
                  <li><a href="#">Menu item 3.4.1</a></li>
                  <li><a href="#">Menu item 3.4.2</a></li>
                  <li><a href="#">Menu item 3.4.3</a></li>
                  <li><a href="#">Menu item 3.4.4</a></li>
                  <li><a href="#">Menu item 3.4.5</a>
                    <ul className="drop">
                      <li><a href="#">Menu item 3.4.5.1</a></li>
                      <li><a href="#">Menu item 3.4.5.2</a></li>
                      <li><a href="#">Menu item 3.4.5.3</a></li>
                      <li><a href="#">Menu item 3.4.5.4</a>
                        <ul className="drop">
                          <li><a href="#">Menu item 3.4.5.1.1</a></li>
                          <li><a href="#">Menu item 3.4.5.1.2</a></li>
                          <li><a href="#">Menu item 3.4.5.1.3</a></li>
                          <li><a href="#">Menu item 3.4.5.1.4</a>
                            <ul className="drop">
                              <li><a href="#">Menu item 3.4.5.1.4.1</a></li>
                              <li><a href="#">Menu item 3.4.5.1.4.2</a></li>
                              <li><a href="#">Menu item 3.4.5.1.4.3</a></li>
                              <li><a href="#">Menu item 3.4.5.1.4.4</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>  
              </li>
            </ul> 
          </li>
          <li><a href="#">Thời Trang</a></li>
          <li><a href="#">Thể thao</a></li>
          <li><a href="#">Y tế</a></li>
        </ul>
      </div>    
        );
    }
}

export default LeftContent;