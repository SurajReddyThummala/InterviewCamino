import { renderComponent , expect } from '../test_helper';
import itemlist from '../../src/containers/item-list';

describe('item-list', () => {

	it('onClick function exists', ()=> {

	const component = renderComponent(itemlist);

	expect(component.find('onClick')).to.exists;
});
});

