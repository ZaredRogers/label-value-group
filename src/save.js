import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        mode = 'wrap-under',
        labelWidth = '12rem',
        gap = 'var(--wp--preset--spacing--10)',
        padLeft = '0',
        padRight = '0',
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: `wp-block-lsx-label-value-group is-mode-${mode}`,
                style: {
                    '--lsx-label-width': labelWidth,
                    '--lsx-gap': gap,
                    '--lsx-pad-left': padLeft,
                    '--lsx-pad-right': padRight,
                },
            })}
        >
            <InnerBlocks.Content />
        </div>
    );
}
