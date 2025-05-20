import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button Component', () => {
  test('renders primary button', () => {
    render(<Button variant="primary">Click Me</Button>)
    const button = screen.getByText(/click me/i)
    expect(button).toHaveClass('bg-gradient-to-br')
  })

  test('calls onClick handler', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable</Button>)
    fireEvent.click(screen.getByText(/clickable/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})