import renderer from 'react-test-renderer';
import Quotes from '../../Components/Quotes';

describe('quotes component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Quotes />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
