import React from 'react';
import ModTemplate from './ModTemplate';

const AEMachines: React.FC = () => {

    return (
        <ModTemplate
            name="AE Machines"
            description="Applied Energistics 2 addon with new machines and automation"
            image="/ae-machines-preview.png"
            features={[
                'New AE2 machines',
                'Enhanced automation',
                'Storage solutions',
                'Integration with existing systems',
                'Advanced crafting automation',
                'Network optimization tools'
            ]}
            technologies={['Java', 'NeoForge', 'AE2 API']}
            longDescription="AE Machines extends the capabilities of Applied Energistics 2 with new machines and automation features. The mod adds specialized machines that integrate seamlessly with AE2 networks, providing enhanced storage solutions and advanced automation capabilities. Players can create more efficient and powerful automation systems with the new tools and machines."
            downloadUrl="https://modrinth.com/mod/ae-machines"
            documentationUrl="https://github.com/SuperScary/ae-machines/wiki"
            gallery={[
                '/ae-machines-gallery-1.png',
                '/ae-machines-gallery-2.png',
                '/ae-machines-gallery-3.png'
            ]}
        />
    );
};

export default AEMachines; 