import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

/*
test('has work as expected', async () => {
  const {container} =  render(<App />)
  const gifLink = await waitForElement(
    () => container.querySelector('.Gif-link')
  )
  expect(gifLink).toBeVisible()
});
*/

test('search form could be used', async () => {
    render(<App />)
    const input =  await screen.findByRole('textbox')
    const button = await screen.findByRole('button', { name: 'Search' });
    
    fireEvent.change(input, { target: {value: 'CR7'} })
    fireEvent.click(button)

    const title = await screen.findByText('CR7')
    expect(title).toBeVisible()
})
