import React from 'react';
import ModTemplate from './ModTemplate';

const FluxMachines: React.FC = () => {

    return (
        <ModTemplate
            name="Flux Machines"
            description="Advanced machinery powered by flux energy"
            image="/flux-machines-preview.png"
            features={[
                'Flux-powered machines',
                'Energy transfer system',
                'Machine upgrades',
                'Automation capabilities',
                'Advanced power management',
                'Custom machine creation'
            ]}
            technologies={['Java', 'NeoForge']}
            longDescription="Flux Machines introduces a new energy system and advanced machinery to Minecraft. The mod features a sophisticated flux energy network that powers various machines, each with unique capabilities and upgrade paths. Players can create complex automation systems and custom machines using the mod's extensive API."
            downloadUrl="https://modrinth.com/mod/flux-machines"
            documentationUrl="https://github.com/SuperScary/flux-machines/wiki"
            gallery={[
                '/flux-machines-gallery-1.png',
                '/flux-machines-gallery-2.png',
                '/flux-machines-gallery-3.png'
            ]}
        />
    );
};

export default FluxMachines; 