## `react`知识点回顾
* `react`组件：可以接收任意的输入值（称之为"props"）,并返回一个需要在页面上展示的`react`元素
* `setState`的第二种形式：接收一个函数而不是对象。该函数将接收先前的状态作为第一个参数，将此次更新被应用时的`props`作为第二个参数,将结果对象返回
  ```js
  /**
   * @param: prevState: 先前的状态
   * @param: props: 此次更新被应用时的props
   * @return: 修改后的内容对象
   */
  this.setState((prevState,props) => ({
    counter: prevState.counter + props.increment
  }))
  ```
* `key`可以在`DOM`中的某些元素被增加或删除的时候帮助`react`识别哪些元素发生了变化
  ```js
  const numbers = [1,2,3,4];
  const listItem = numbers.map((number,i) => (
    // 元素的key应该在它的兄弟元素之间唯一，不需要全局唯一
    // 当我们生成2个不同的数组时可以使用相同的key
    <li key={i}>{number}</li>
  ))
  ```
* 受控组件和非受控组件：
  * 受控组件：可变的状态保存在组件的状态属性(`state`)中,并且只能用`setState()`方法进行更新
  * 非受控组件：使用`ref`进行`DOM`操作，这时表单的内容保存在`DOM`对象中
