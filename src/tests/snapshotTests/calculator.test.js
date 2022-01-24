import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../../Components/calculator';

describe('calculator  component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('calculator component DOM display', () => {
  it('renders calculator component', () => {
    render(<Calculator />);

    expect(screen.getByText('Lets do some math')).toBeInTheDocument();
  });

  it('tests  if Ac button functions', () => {
    render(<Calculator />);

    const AcButton = screen.getByRole('button', { name: /AC/i });
    expect(AcButton).toBeInTheDocument();
  });

  it('should function well and display desired output', () => {
    render(<Calculator />);

    const btn3 = screen.getByRole('button', { name: /3/i });
    fireEvent.click(btn3);
    const multiply = screen.getByRole('button', { name: /x/i });
    fireEvent.click(multiply);
    const btn5 = screen.getByRole('button', { name: /5/i });
    fireEvent.click(btn5);
    const equals = screen.getByRole('button', { name: /=/i });
    fireEvent.click(equals);
    const output = screen.getByTestId('output');

    expect(output).toHaveTextContent('15');
  });
});
