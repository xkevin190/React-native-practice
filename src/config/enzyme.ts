import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

/**
 * @tech-debt
 *
 * Update enzyme to support react 18
 */
Enzyme.configure({ adapter: new Adapter() });
