import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import { describe, it, expect } from 'vitest';

describe('LoginForm', () => {
  it('renders input fields', () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/пароль/i)).toBeInTheDocument();
  });
});
