/**
 * Global Configuration for Aetheria Chat
 * Centralized settings including organization branding.
 */

const getSavedOrg = () => {
  try {
    return typeof window !== 'undefined' ? localStorage.getItem('aetheria_org_name') : null;
  } catch {
    return null;
  }
};

const currentOrg = getSavedOrg() || 'AETHERIA';

export const SITE_CONFIG = {
  // Project name matches organization name
  organizationName: currentOrg,
  productName: currentOrg,
  tagline: 'Quiet Intelligence. Pure Glass Architecture.',
  version: '2.5.0',
  description: 'A cinematic, Apple-inspired AI workspace with warm brown and obsidian tones, 3D depth, and realistic liquid-glass effects.',
  storageKeyUser: 'aetheria_user_profile',
  storageKeyChats: 'aetheria_conversations',
  storageKeyPrefs: 'aetheria_preferences',
  storageKeyOrg: 'aetheria_org_name',
} as const;

export function updateOrganizationName(newName: string) {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('aetheria_org_name', newName.trim());
      window.location.reload();
    }
  } catch {
    // Storage unavailable
  }
}

export const STARTER_PROMPTS = [
  {
    title: 'Architectural Blueprint',
    prompt: 'Design a resilient, distributed event stream architecture for real-time spatial computing with sub-millisecond latency.',
    category: 'Architecture',
  },
  {
    title: 'Aesthetic Philosophy',
    prompt: 'Synthesize the design philosophy behind Dieter Rams, Jony Ive, and liquid-glass user interfaces.',
    category: 'Philosophy',
  },
  {
    title: 'Quantum Memory State',
    prompt: 'Explain quantum entanglement coherence times and topological qubits in elegant, intuitive language.',
    category: 'Science',
  },
  {
    title: 'Executive Briefing',
    prompt: 'Draft an executive strategy memo on balancing on-device intelligence with cryptographic data sovereignty.',
    category: 'Strategy',
  },
];
