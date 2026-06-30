// Project cards. Single source of truth shared by the Projects page and the
// home-page preview. Descriptions are frozen content (Phase 3). Detail pages
// are intentionally deferred — these cards invite future expansion.
export interface Project {
  name: string;
  kind: string;
  description: string;
}

export const projects: Project[] = [
  {
    name: 'Octopus',
    kind: 'Concept',
    description:
      'Internal field tooling concept for reducing repetitive review work and improving technical preparation.',
  },
  {
    name: 'BlindSpot Labs',
    kind: 'Open source',
    description: 'Open-source API security learning lab and demo environment.',
  },
  {
    name: 'DataSpring Storage',
    kind: 'Demo',
    description:
      'Fictional demo company used for realistic security and architecture scenarios.',
  },
];
