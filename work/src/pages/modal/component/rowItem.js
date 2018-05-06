/*
 * @Author: wangkai
 * @Date: 2018-05-06 12:45:16
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-05-06 12:45:55
 * @Desc: 每一个抽奖的item
 */

import React, { Component } from 'react'


export default class RowItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { activeId, activeNum } = this.props;
    // 这里的activeNum传来的是一个字符串，要进行数据类型的转换
    activeNum = activeNum - 0;
    return (
      <div>
        <div className="rowitem">
          <span className={activeId === activeNum ? 'active' : ''}>
            {activeNum}
          </span>
        </div>
      </div>
    )
  }
}
