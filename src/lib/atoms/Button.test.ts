// import '@testing-library/jest-dom';

// import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('Button.svelte', () => {
  it('dispatches event on click', async () => {
    render(Button, { label: 'Button' });
    const btn = screen.getByRole('button');
    await fireEvent.click(btn);
    expect(btn).toHaveTextContent('Button');
  });

  it('button type works', async () => {
    render(Button, { label: 'Button', type: 'cancel' });
    const btn = screen.getByRole('button');
    await fireEvent.click(btn);
    expect(btn).toHaveTextContent('Button');
  });

  it('button emphasis works', async () => {
    render(Button, { label: 'Button', emphasis: 'low' });
    const btn = screen.getByRole('button');
    await fireEvent.click(btn);
    expect(btn).toHaveTextContent('Button');
  });
});
