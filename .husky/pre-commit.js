import { execSync } from 'child_process';

try {
  const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  if (branch === 'main') {
    console.error('No se pueden hacer commits directamente a la rama main.');
    process.exit(1);
  }
} catch (error) {
  console.error('Error al obtener la rama actual:', error);
  process.exit(1);
}
