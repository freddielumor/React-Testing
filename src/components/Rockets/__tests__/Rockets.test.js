import React from 'react'
import { render } from '../../../utils/testingUtils'
import '@testing-library/jest-dom/extend-expect'

import Rockets from '../Rockets'

describe('<Rockets />', () => {
  test('renders rockets page title', async () => {
    const props = {}

    const { findByText } = render(<Rockets {...props} />)

    await findByText(/ROCKETS/i)
  })
})
