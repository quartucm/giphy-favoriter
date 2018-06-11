import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from './store/createStore';

configure({ adapter: new Adapter() });