

## Patterns

### Singleton

Disadvantages:
1. global state
2. easy to be changed

### Proxy 

Advantages:
1. Intercept and control interactions to target objects
2. validation、formatting、debug、notifications

Disadvantages:
1. Performance issues. 

### Provider Pattern

Advantages:
1. make data available to multiple child components


Disadvantages:
1. Performance issues - All components that consume the context re-render on each state change.

### Prototype

Advantages:
1. avoid duplication of methods and reduce the amount of memory

### Container/Presentation

Description:
1. separation of concerns
2. Presentational components can be pure functions which are responsible for the UI
3. Container components are responsible for the state and data of the application


### Observer Pattern

Descriptions:
1. Use observables to notify subscribers when an event occurs
2. observers: an array of observers that will get notified whenever a specific event occurs
3. subscribe(): a method in order to add observers to the observers list
4. unsubscribe(): a method in order to remove observers from the observers list
5. notify(): a method to notify all observers whenever a specific event occurs
6. A popular library that uses the observable pattern is RxJS.

### Mixin Pattern

Descriptions:
1. Add functionality to objects or classes without inheritance

Disadvantages:
1. lead to prototype pollution and a level of uncertainty regarding the origin of functions


### Mediator/Middleware Pattern(nice to have)

Descriptions:
1. Use a central mediator object to handle communication between components(Middleware)

Advantages:
1. when you have a large number of components, it's good and easy to manage communications between each component


### HOC(nice to have)

Descriptions:
1. Pass reusable logic down as props to components throughout your application
2. A Higher Order Component (HOC) is a component that receives another component.
3. Apollo Client  

Advantages:
1. use the same logic in multiple components that can include applying a certain styling to components, requiring authorization, or adding a global state.


Best Practice for HOC:
1. The same, uncustomized behavior needs to be used by many components throughout the application.
2. The component can work standalone, without the added custom logic.
3. AuthoComponent

Best use-cases for Hooks:
1. The behavior has to be customized for each component that uses it.
2. The behavior is not spread throughout the application, only one or a few components use the behavior.
3. The behavior adds many properties to the component


### Rendering Pattern

Descriptions:
1. A render prop is a prop on a component, which value is a function that returns a JSX element.

Advantages:
1. Sharing logic and data among several components

Disadvantages:
1. replaced by hooks

### Flyweight Pattern

Descriptions:
1. Reuse existing instances when working with identical objects

Advantages:
1. conserve memory


### Factory Pattern

Descriptions:
1. Use a factory function in order to create objects

Pros:
1. useful when to create multiple smaller objects that share the same properties

Disadvantages:
1. ES6 Arrow Functions is more efficient


### Compound Pattern

Descriptions:
1. Create multiple components that work together to perform a single task

Pros:
1. Compound components manage their own internal state, which they share among the several child components

Cons:
1. When using the React.Children.map to provide the values, the component nesting is limited. Only direct children of the parent component will have access to the open and toggle props, meaning we can't wrap any of these components in another component.

```javascript
export default function FlyoutMenu() {
  return (
    <FlyOut>
      {/* This breaks */}
      <div>
        <FlyOut.Toggle />
        <FlyOut.List>
          <FlyOut.Item>Edit</FlyOut.Item>
          <FlyOut.Item>Delete</FlyOut.Item>
        </FlyOut.List>
      </div>
    </FlyOut>
  );
}
```