import { addHelpers } from '../../view/helpers/contextMethods';
import { doc } from '../../config/environment';

const query = doc && doc.querySelector;

export default function( node ) {
	if ( typeof node === 'string' && query ) {
		node = query.call( document, node );
	}

	if ( !node || !node._ractive ) return undefined;

	const storage = node._ractive;

	return addHelpers( {}, storage.proxy );
}
