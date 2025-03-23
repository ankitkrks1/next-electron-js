#!/usr/bin/env node
import { exec } from "child_process";
import path from "path";

const repoUrl = "https://github.com/ankitkrks1/next-electron-js.git";
const folderName = "next-electron-js";

// Step 1: Clone the repository
exec(`git clone ${repoUrl}`, (cloneError, cloneStdout, cloneStderr) => {
  if (cloneError) {
    console.error(`Error cloning repository: ${cloneStderr}`);
    return;
  }
  console.log(cloneStdout);

  // Step 2: Change directory to the cloned folder
  const projectPath = path.join(process.cwd(), folderName);
  process.chdir(projectPath);

  // Step 3: Run npm install
  exec("npm install", (installError, installStdout, installStderr) => {
    if (installError) {
      console.error(`Error installing dependencies: ${installStderr}`);
      return;
    }
    console.log(installStdout);
    console.log("Project setup complete!");
  });
});