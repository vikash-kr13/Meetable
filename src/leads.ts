import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export type LeadSource =
  | 'hero'
  | 'demo'
  | 'final-cta'
  | 'tier-starter'
  | 'tier-fullhouse'
  | 'tier-multilocation';

export interface LeadPayload {
  email: string;
  source: LeadSource;
  tier?: string;
}

export async function saveLead(payload: LeadPayload): Promise<void> {
  await addDoc(collection(db, 'leads'), {
    email: payload.email.trim().toLowerCase(),
    source: payload.source,
    tier: payload.tier ?? null,
    timestamp: serverTimestamp(),
  });
}
