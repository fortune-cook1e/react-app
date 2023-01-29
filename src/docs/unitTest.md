

## Unit-Test Learning Record


### Usage

1. getByRole 可以用来选择任何元素
2. getByLabelText 最好用于表单元素
3. getByPlaceholderText（选择label比这个好）
4. getByText 不用于表单（我基本用这个）
5. 模仿用户行为 @testing-library/user-event
6. 当涉及到state改变时，行为最好使用 waitfor


### Experience

1. 有的时候 render 组件后，但是 screen 可能找不到，这个时候可以将 render 配合 await 使用
2. 嵌套组件过多。可以利用 jest.mock的方法来将其他组件设置为普通 div
3. 重复性的行为可以放在 beforeEach 中执行，例如: render 组件
4. user-event 比 fireEvent 更高级