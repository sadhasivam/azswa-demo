# Azure Static Web Apps Demo

## Setup

1. Clone this repository.
2. Install the necessary npm libraries. The project utilizes Node.js v0.21.0, pnpm, and Vite.

## Local Testing

1. Run `pnpm dev` or `npm run dev`.
2. Visit the website at `http://localhost:5173/`.

## Build

1. Run `pnpm azswa` for Azure Static Web Apps emulator testing.
2. Visit the website at the SWA emulator port. The default URL is `http://localhost:4280`.

## Create Azure Static Web Apps

1. Create Azure Static Web Apps either through Terraform or Azure Portal.
   - Note: When creating, select "other deployment option" in the Deployment details (not GitHub or Azure DevOps).
2. After creation, navigate to the Azure Static Web Apps resource in the Azure Portal.
3. Select Overview > Manage Deployment Token.
4. Copy the token and keep it ready.
5. Save the token into an environment variable.
   - `export SWA_TOKEN=055d9d899b4....a178dac57257542........-4b85-8f25-5fdd7974267f00f171659`

## Deploy

1. Run `pnpm azdeploy`.
2. Check your website from the Azure Static Web Apps portal.
e.g)  `https://polite-smoke-0ddb7120f-preview.eastus2.5.azurestaticapps.net/`
