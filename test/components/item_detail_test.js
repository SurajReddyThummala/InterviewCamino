import { renderComponent , expect } from '../test_helper';
import itemdetail from '../../src/containers/item-detail';

describe('item-detail', () => {

	it('Header class exists', ()=> {

	const component = renderComponent(itemdetail);
	
	expect(component).to.have.class('Welcome');
});
});

