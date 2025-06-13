const fs = require('fs');
const path = require('path');

// Read the spinner component source
const componentPath = path.join(__dirname, '../src/components/ui/spinner.tsx');
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
const outputDir = path.join(__dirname, '../src/app/api/r/spinner');
fs.mkdirSync(outputDir, { recursive: true });

// Write the spinner.json file
const outputPath = path.join(outputDir, 'spinner.json');
fs.writeFileSync(outputPath, JSON.stringify(registryData, null, 2));

console.log(`✅ Registry file generated at: ${outputPath}`);