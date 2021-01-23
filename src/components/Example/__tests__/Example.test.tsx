import { render, screen } from '@testing-library/react';
import { Example } from '../Example';

describe('<Example />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Example />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render', () => {
    render(<Example />);
    const linkElement = screen.getByText(/Example/i);
    expect(linkElement).toBeInTheDocument();
  });
});
