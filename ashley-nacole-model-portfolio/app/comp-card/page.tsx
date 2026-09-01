import type { Metadata } from 'next';
import { CompCardViewer } from '@/components/CompCardViewer';

export const metadata: Metadata = {
  title: 'Ashley Nacole | Comp Card',
  description: 'High-resolution Ashley Nacole model comp card.',
};

export default function CompCardPage() {
  return <CompCardViewer />;
}
