import expect from 'expect'
import React from 'react'
import { createRoot } from 'react-dom/client';

import Component from 'src/'

describe('Component', () => {
  let node, root;

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    root.unmount();
  })

  it('displays a welcome message', () => {
    root = createRoot(node)
    root.render(<Component/>, node, () => {
      expect(node.innerHTML).toContain('Welcome to React components')
    })
  })
})
