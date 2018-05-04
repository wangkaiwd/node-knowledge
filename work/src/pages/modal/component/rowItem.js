import React, { Component } from 'react'


export default class RowItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // const activeId = this.props.activeId;
    // const activeNum = this.props.num;

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
