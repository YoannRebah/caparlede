import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src/components');
const outputFile = path.join(process.cwd(), 'src/app/dev-components.ts');

const componentFiles = [];

fs.readdirSync(componentsDir).forEach((dir) => {
  const componentPath = path.join(componentsDir, dir);
  if (fs.statSync(componentPath).isDirectory()) {
    const files = fs.readdirSync(componentPath);
    const componentFile = files.find(file => file.endsWith('.component.ts'));
    if (componentFile) {
      componentFiles.push({
        name: path.basename(componentFile, '.component.ts'),
        dir,
        fullPath: path.join(componentPath, componentFile)
      });
    }
  }
});

// Fonction pour générer un usage avec les @Input()
function generateUsage(componentName, inputs) {
  const tag = componentName
    .replace('Component', '')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');

  let inputProps = '';

  inputs.forEach(input => {
    if (input.includes('?:')) {
      // Optional inputs
      inputProps += ` ${input.split(':')[0]}="optional"`;
    } else if (input.includes('!:')) {
      // Required inputs
      const [name, type] = input.split(':').map(s => s.trim());
      if (type.includes('string')) inputProps += ` ${name}="demo"`;
      else if (type.includes('boolean')) inputProps += ` [${name}]="true"`;
      else if (type.includes('number')) inputProps += ` [${name}]="123"`;
    }
  });

  return `<app-${tag}${inputProps}></app-${tag}>`;
}

let output = `// Ce fichier est généré automatiquement.\n\n`;

componentFiles.forEach(comp => {
  const relativePath = `../components/${comp.dir}/${comp.name.replace('.ts', '')}`;
  output += `import { ${comp.name} } from '${relativePath}';\n`;
});

output += `\nexport const DEV_COMPONENTS = [\n`;

componentFiles.forEach(comp => {
  const content = fs.readFileSync(comp.fullPath, 'utf8');

  const inputMatches = Array.from(content.matchAll(/@Input\(\)\s*(public\s+)?(\w+)!?:\s*([\w\[\]\|]+)/g));
  const inputs = inputMatches.map(match => `${match[2]}: ${match[3]}`);

  const usage = generateUsage(comp.name, inputs);

  output += `  { name: '${comp.name}', component: ${comp.name}, usage: \`${usage}\` },\n`;
});

output += `];\n`;

fs.writeFileSync(outputFile, output);

console.log('✅ Fichier dev-components.ts généré avec success, inputs auto-remplis !');
