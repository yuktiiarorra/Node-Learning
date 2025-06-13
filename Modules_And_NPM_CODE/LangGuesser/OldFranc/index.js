// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
const franc = require("franc");
// console.log(franc("Alle menslike wesens word vry"));
const langs = require("langs");
const colors = require("colors")

const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red)
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`.green)
}

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE
// $ cd LangGuesser/OldFranc/

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/LangGuesser/OldFranc
// $ npm install franc
// npm WARN old lockfile
// npm WARN old lockfile The package-lock.json file was created with an old version of npm,
// npm WARN old lockfile so supplemental metadata must be fetched from the registry.
// npm WARN old lockfile
// npm WARN old lockfile This is a one-time fix-up, please be patient...
// npm WARN old lockfile
// npm WARN deprecated trim@0.0.1: Use String.prototype.trim() instead

// added 7 packages, and audited 8 packages in 3s

// 4 packages are looking for funding
//   run `npm fund` for details

// 3 high severity vulnerabilities

// To address all issues (including breaking changes), run:
//   npm audit fix --force

// Run `npm audit` for details.

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/LangGuesser/OldFranc
// $ npm uninstall franc

// removed 5 packages, and audited 3 packages in 2s

// found 0 vulnerabilities

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/LangGuesser/OldFranc
// $ npm install franc@5.0.0
// npm WARN deprecated trim@0.0.1: Use String.prototype.trim() instead

// added 5 packages, and audited 8 packages in 2s

// 4 packages are looking for funding
//   run `npm fund` for details

// 3 high severity vulnerabilities

// To address all issues (including breaking changes), run:
//   npm audit fix --force

// Run `npm audit` for details.

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/LangGuesser/OldFranc
// $ npm install langs

// changed 1 package, and audited 8 packages in 1s

// 4 packages are looking for funding
//   run `npm fund` for details

// 3 high severity vulnerabilities

// To address all issues (including breaking changes), run:
//   npm audit fix --force

// Run `npm audit` for details.

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/LangGuesser/OldFranc
// $ node index.js
// afr

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/LangGuesser/OldFranc
// $ node index.js "Alle menslike wesens word vry"
// Our best guess is: Afrikaans

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/LangGuesser/OldFranc
// $ node index.js "jkk"
// SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!
