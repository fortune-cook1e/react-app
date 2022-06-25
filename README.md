# react-app

学习 react 使用

## Preview

[Preview](https://fortune-cook1e.github.io/react-app)

## 功能点

- antd 动态主题
- 路由拦截
- tailwind
- webpack federation
- 动画(Motion)
- transition 封装
- redux-toolkit
- 图片懒加载

## 记录项

- 在 react-query 中
  - staleTime：数据保质期，保质期遇到同 key 请求时，不会再次获取数据，也就是从缓存中获取，瞬间切换展示，isFetching 一直为 false
  - cacheTime：数据缓存时间，数据在缓存期时，会按照 key 存储，下次遇到相同 key 时，会直接从缓存中获取，瞬间展示，但是否重新请求获取数据，依赖 staleTime 配置。当不配置 stalTime 时，遇到相 key，虽然瞬间切换为缓存数据展示，但此时后台获取新数据，待获取完毕后瞬间切换为新数据
  - 最好的情况时 stalTime 和 cacheTime 一起使用，不过保质期，数据使用缓存
  - 比如设置为 10s 缓存，或者 30s 缓存，5s 的保质期，那么在 5s 内用户获取同 key 数据走缓存，过了 5s 重新请求展示 loading 态，但是由于存在缓存，所以 loading 时用户还可以看到上次的缓存结果，假如新数据到了没有变化，loading 关闭后，数据不会改变，体验是很好的，一旦请求失败，也能兜底上次的数据
  - 在 useQuery 中，在请求数据到来后 不要对 依赖的 state 进行 set 操作，因为 useQuery refetch 函数执行会监听 state
