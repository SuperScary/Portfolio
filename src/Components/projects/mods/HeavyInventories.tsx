import React from 'react';
import ModTemplate from './ModTemplate';

const HeavyInventories: React.FC = () => {

    return (
        <ModTemplate
            name="Heavy Inventories"
            description="Adds weight and mass mechanics to inventory management"
            image="/heavy-inventories-preview.png"
            features={[
                'Weight-based inventory system',
                'Realistic mass calculations',
                'Weight-based movement effects',
                'Customizable weight settings',
                'Weight-based tool efficiency',
                'Advanced weight visualization'
            ]}
            technologies={['Java', 'NeoForge', 'Machine Learning']}
            longDescription="Heavy Inventories introduces a realistic weight system to Minecraft, making inventory management more strategic and challenging. Each item has its own weight, affecting player movement, tool efficiency, and overall gameplay. The mod uses machine learning to calculate realistic mass distributions and movement effects, creating a more immersive experience."
            downloadUrl="https://modrinth.com/mod/heavy-inventories"
            documentationUrl="https://github.com/SuperScary/heavy-inventories/wiki"
            gallery={[
                '/heavy-inventories-gallery-1.png',
                '/heavy-inventories-gallery-2.png',
                '/heavy-inventories-gallery-3.png'
            ]}
        />
    );
};

export default HeavyInventories; 