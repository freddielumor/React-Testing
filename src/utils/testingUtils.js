import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { store } from '../redux/store'

const initialState = {}

const testWrapper = ({ children }) => {
  return (
    <Router>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </Router>
  )
}

const testRender = (ui) => render(ui, { wrapper: testWrapper })

export * from '@testing-library/react'

export { testRender as render }
