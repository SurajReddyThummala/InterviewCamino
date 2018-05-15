import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {

	it('Testing class exists', ()=> {

	const component = renderComponent(App);
	
	expect(component).to.have.class('test');

});
});

