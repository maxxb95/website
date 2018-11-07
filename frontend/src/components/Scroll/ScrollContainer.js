import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getRandomColor } from '../../utils/helpers';

export default class ScrollContainer extends Component {
    refresh() {
        return "";
    }

    render() {
        let items = [];
        for (let i = 0; i < 100; i++) {

          items.push(<div style={{height: 500, backgroundColor:getRandomColor()}} />)
        }

        return (
            <div style={{ height: '100%' }}>
                <InfiniteScroll
                  dataLength={1} //This is important field to render the next data
                  next={() => {}}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{textAlign: 'center'}}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                  // below props only if you need pull down functionality
                  refreshFunction={this.refresh}
                  pullDownToRefresh
                  pullDownToRefreshContent={
                    <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                  }
                  releaseToRefreshContent={
                    <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                  }>
                    {items}
                </InfiniteScroll>
            </div>
        );
    }
}