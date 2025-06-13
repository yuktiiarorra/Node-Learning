// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';
 
const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
  console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
} else {
  const language = langs.where("3", langCode);
  console.log(colors.green(`Our best guess is: ${language.name}`));
}

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/LangGuesser/NewFranc
// $ npm i franc@latest
// npm WARN old lockfile
// npm WARN old lockfile The package-lock.json file was created with an old version of npm,
// npm WARN old lockfile so supplemental metadata must be fetched from the registry.
// npm WARN old lockfile
// npm WARN old lockfile This is a one-time fix-up, please be patient...
// npm WARN old lockfile
// added 6 packages, and audited 7 packages in 2s

// 4 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/LangGuesser/NewFranc
// $ npm i langs

// changed 1 package, and audited 7 packages in 794ms

// 4 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/LangGuesser/NewFranc
// $ npm i colors

// up to date, audited 7 packages in 807ms

// 4 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/LangGuesser/NewFranc
// $ node index.js "Alle menslike wesens word vry"
// Our best guess is: Afrikaans

// kunj5@DESKTOP-6GU8P5E MINGW64 ~/OneDRive/YUKTI PROGRams/Node/Modules_And_NPM_CODE/LangGuesser/NewFranc
// $ node index.js "lifhefl"
// SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!

