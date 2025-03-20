import React from 'react';
import ModTemplate from './ModTemplate';

const HotSwap: React.FC = () => {
    return (
        <ModTemplate
            name="HotSwap"
            description="A mod that allows for quick and efficient item swapping in your inventory"
            image="/hotswap-preview.gif"
            features={[
                'Quick item swapping with hotkeys',
                'Customizable key bindings',
                'Smart item selection',
                'Inventory organization tools',
                'Stack splitting and merging',
                'Multi-item swapping'
            ]}
            technologies={['Java', 'NeoForge', 'Fabric']}
            longDescription="HotSwap is a powerful inventory management mod that revolutionizes how you handle items in Minecraft. With its intuitive hotkey system and smart item selection, you can quickly swap items between slots, split stacks, and organize your inventory with unprecedented efficiency. The mod features a highly customizable key binding system and intelligent item validation to prevent invalid swaps."
            downloadUrl="https://modrinth.com/mod/hotswap"
            documentationUrl="https://github.com/SuperScary/hotswap/wiki"
            gallery={[
                '/hotswap-gallery-1.png',
                '/hotswap-gallery-2.png',
                '/hotswap-gallery-3.png'
            ]}
        />
    );
};

export default HotSwap; 