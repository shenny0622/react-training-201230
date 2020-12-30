import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <div>
                <ul className="page">
                   <li><a href="https://hackmd.io/xG1tw_nER7Wu3xL1gbGYPQ?both">Prev </a></li>
                   <li><a href="#">1</a></li>
                   <li><a href="#">2</a></li>
                   <li><a href="#">Next</a></li>
                </ul>
                
            </div>
        );
    }
}

export default Pagination;