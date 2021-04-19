import React, {Component} from 'react';
import ShowCard from './ShowCard';
import getData from './data';

class RightContent extends Component {

    render() {
          const products = getData();
            return (
                <div>
                    <div id="right-content">
                        <div id="products">
                            {   
                            
                                products.map(product =>
                                    <ShowCard type={product.type} name={product.name} image={product.image} content={product.content}/>)
                            }
                                <div style={{clear: 'both'}}/>                          
                        </div>
                        <div style={{clear: 'both'}}/>  
                    </div>
                    <div style={{clear: 'both'}}/>                 
                </div>
            );
    }
}

export default RightContent;