import renderer from 'react-test-renderer';
import Home from '../../Components/Home';

describe('Home  component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
