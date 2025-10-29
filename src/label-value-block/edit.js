import {
    useBlockProps,
    InnerBlocks,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    __experimentalUnitControl as UnitControl,
} from '@wordpress/components';

const TEMPLATE = [
    [
        'core/group',
        { className: 'label', layout: { type: 'default' } },
        [['core/paragraph', { content: '<strong>Label:</strong>' }]],
    ],
    ['core/group', { className: 'value', layout: { type: 'default' } }],
];

export default function Edit({ attributes, setAttributes }) {
    const {
        mode = 'wrap-under',
        labelWidth = '12rem',
        gap = 'var(--wp--preset--spacing--10)',
        padLeft = '0',
        padRight = '0',
    } = attributes;

    const blockProps = useBlockProps({
        className: `wp-block-lsx-label-value-group is-mode-${mode}`,
        style: {
            '--lsx-label-width': labelWidth,
            '--lsx-gap': gap,
            '--lsx-pad-left': padLeft,
            '--lsx-pad-right': padRight,
        },
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title="Layout" initialOpen={true}>
                    <SelectControl
                        label="Mode"
                        value={mode}
                        options={[
                            { label: 'Wrap under label', value: 'wrap-under' },
                            {
                                label: 'Align with label (grid)',
                                value: 'align',
                            },
                        ]}
                        onChange={(v) => setAttributes({ mode: v })}
                    />
                    <UnitControl
                        label="Label width"
                        value={labelWidth}
                        onChange={(v) =>
                            setAttributes({ labelWidth: v || '0' })
                        }
                        units={['px', 'rem', 'em', 'ch']}
                    />
                    <UnitControl
                        label="Gap between label and value"
                        value={gap}
                        onChange={(v) => setAttributes({ gap: v || '0' })}
                        units={['px', 'rem', 'em']}
                    />
                    <UnitControl
                        label="Left padding (beneath label)"
                        value={padLeft}
                        onChange={(v) => setAttributes({ padLeft: v || '0' })}
                        units={['px', 'rem', 'em']}
                    />
                    <UnitControl
                        label="Right padding"
                        value={padRight}
                        onChange={(v) => setAttributes({ padRight: v || '0' })}
                        units={['px', 'rem', 'em']}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <InnerBlocks template={TEMPLATE} templateLock={false} />
            </div>
        </>
    );
}
