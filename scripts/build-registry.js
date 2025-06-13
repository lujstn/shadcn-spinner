const fs = require('fs');
const path = require('path');

// Read the spinner component source from lib
const componentPath = path.join(__dirname, '../lib/spinner.tsx');
const componentContent = fs.readFileSync(componentPath, 'utf8');

// Create the registry object
const registryData = {
  name: "spinner",
  type: "registry:ui",
  dependencies: [
    "@radix-ui/react-slot",
    "class-variance-authority"
  ],
  files: [
    {
      path: "ui/spinner.tsx",
      content: componentContent,
      type: "registry:ui",
      target: ""
    }
  ],
  tailwind: {
    config: {
      theme: {
        extend: {
          keyframes: {
            "spinner-leaf-fade": {
              "0%, 100%": {
                opacity: "0"
              },
              "50%": {
                opacity: "1"
              }
            }
          },
          animation: {
            "spinner-leaf-fade": "spinner-leaf-fade 800ms linear infinite"
          }
        }
      }
    }
  }
};

// Ensure the output directory exists
const outputDir = path.join(__dirname, '../site/src/app/api/r/spinner');
fs.mkdirSync(outputDir, { recursive: true });

// Write the spinner.json file
const outputPath = path.join(outputDir, 'spinner.json');
fs.writeFileSync(outputPath, JSON.stringify(registryData, null, 2));

// Also create the route.ts file
const routeContent = `import spinner from "./spinner.json";

export async function GET() {
  return new Response(JSON.stringify(spinner), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
`;

const routePath = path.join(outputDir, 'route.ts');
fs.writeFileSync(routePath, routeContent);

console.log(`✅ Registry files generated at: ${outputDir}`);