

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

