// Self-contained bundler for zero-dependency offline/file:// protocol support

import fs from 'fs';
import path from 'path';

const files = [
  'src/data/events.js',
  'src/services/clashGuard.js',
  'src/services/calendarService.js',
  'src/components/Icons.js',
  'src/components/UserFlowBar.js',
  'src/components/SplashScreen.js',
  'src/components/OnboardingScreen.js',
  'src/components/DiscoveryFeedScreen.js',
  'src/components/EventDetailsScreen.js',
  'src/components/ConfirmationScreen.js',
  'src/components/EventFormScreen.js',
  'src/components/ClashGuardScreen.js',
  'src/components/FlowDiagramModal.js',
  'src/components/MyPassesModal.js',
  'src/components/CampusMapModal.js',
  'src/components/RegisterModal.js',
  'src/app.js'
];

let bundleContent = '/* Campus Pulse Combined Bundle */\n(function(){\n';

for (const f of files) {
  let content = fs.readFileSync(f, 'utf-8');
  // strip import statements
  content = content.replace(/^import\s+[^;]+;\s*$/gm, '');
  // replace export const / export function / export default
  content = content.replace(/export\s+const\s+/g, 'const ');
  content = content.replace(/export\s+function\s+/g, 'function ');
  content = content.replace(/export\s+default\s+/g, '');
  content = content.replace(/export\s*\{[^}]+\};/g, '');

  bundleContent += `\n/* --- ${f} --- */\n` + content + '\n';
}

bundleContent += '\n})();\n';

fs.writeFileSync('bundle.js', bundleContent, 'utf-8');
console.log('Successfully generated bundle.js for file:// fallback compatibility!');
