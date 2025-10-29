import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

// Styles (compiled by @wordpress/scripts)
import './editor.scss';
import './style.scss';

// You can import metadata if you prefer, but create-block copies block.json into /build automatically.
// registerBlockType( metadata.name, { ... } );
registerBlockType('lsx/label-value-group', {
    edit: Edit,
    save,
});
