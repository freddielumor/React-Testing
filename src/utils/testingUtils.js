import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { render } from '@testing-library/react'
import { store } from '../redux/store'
import '@testing-library/jest-dom'

const testWrapper = ({ children }) => {
  return (
    <Router>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </Router>
  )
}

const testRender = (ui, options) =>
  render(ui, { wrapper: testWrapper, ...options })

export * from '@testing-library/react'

export { testRender as render }
