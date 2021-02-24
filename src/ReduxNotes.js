// -- Redux Notes --

// - Why do we want to use Redux -
//  - Good fot managing large state
//  - UseFule for sharing data between containers
//  - Predictiable state management using the 3 principles
//      - Single source or truth
//      - State is read only
//      - Changes using pure functions

// - Flow chat
//      - Action ---> Reducer ---> Store ---> Make Changes

//  - Action- An action is something a user does, like clicking a button or 
//    clicking on a dropdown menu. We a user creates an action it
//    goes through the reducer

//  - Reducer- A reducer is function, a pure function that recieves
//    an input which is the action from the user and then 
//    creates an output, and the output is the state or the Store
//    as we call it in Redux which is the entire state of the app

//  - Store- The Store is the entire state of the app, went changes are
//    made, React notices and makes changes to the view layer

//  - Redux use this thing called a Flux Pattern
//      - Action ---> Dispatch ---> Store ---> View

//  - Esentially Redux === this.state in React

//  - When we import the createStore() from redux it gives us a few 
//    functions that we can use
//      - dispatch
//      - getState
//      - repalceReducer
//      - subscribe
//      - symbol(observable)

