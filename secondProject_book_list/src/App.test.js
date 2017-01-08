import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>,
//    div);
// });

// it('renders without crashing', () => {
//   shallow(
//     <Provider store={createStoreWithMiddleware(reducers)}>
//       <App />
//     </Provider>
//   );
// });


it('renders welcome message', () => {
  const wrapper = shallow(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  );
  const welcome = <h2>Welcome to React</h2>;
  console.log(welcome);
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
