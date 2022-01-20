import renderer from 'react-test-renderer';
// import calculator from '../../Components/calculator';

describe('calculator  component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
