// Companies where members have landed (approved homepage proof).
// Logos live in public/logos with viewBoxes trimmed to the artwork. `height` (px)
// balances them by visual weight: very wide wordmarks run short, compact marks tall.
//
// Logo sources:
// - amazon, capitalone, generaldynamics, microsoft, servicenow: official wordmarks
//   from Wikimedia Commons (Amazon_logo.svg, Capital_One_logo.svg,
//   General_Dynamics_logo.svg, Microsoft_logo_(2012).svg, ServiceNow_logo.svg).
// - aws, seagate: pre-existing repo files.
// - wellsfargo: pre-existing repo file with its red background box removed so the
//   lettering can be inked as a single color.
export const placements = [
    { name: 'Amazon', logo: 'amazon.svg', height: 30 },
    { name: 'AWS', logo: 'aws.svg', height: 38 },
    { name: 'Capital One', logo: 'capitalone.svg', height: 34 },
    { name: 'Microsoft', logo: 'microsoft.svg', height: 26 },
    { name: 'ServiceNow', logo: 'servicenow.svg', height: 19 },
    { name: 'Wells Fargo', logo: 'wellsfargo.svg', height: 36 },
    // The two widest wordmarks take a full row on phones (`wide`).
    { name: 'General Dynamics', logo: 'generaldynamics.svg', height: 11, wide: true },
    { name: 'Seagate', logo: 'seagate.svg', height: 34, wide: true },
];
