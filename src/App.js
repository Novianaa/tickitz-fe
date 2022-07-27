import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import MainNavigation from './mainNavigation';
// import configureStore from './redux/store'
import { store, persistor } from './redux/store'

// const { store, persistor } = configureStore()
const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App;
