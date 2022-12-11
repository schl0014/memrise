const prettierCmd = 'prettier --find-config-path --cache --cache-strategy content --write';
const stylelintCmd = 'stylelint --max-warnings=0 --aei --cache --cache-strategy content --fix';
const eslintCmd = 'eslint --max-warnings=0 --cache --cache-strategy content --fix';

module.exports = {
  '**/*.js': [prettierCmd, eslintCmd],
  '**/*.html': [prettierCmd, stylelintCmd, eslintCmd],
  '**/*.css': [prettierCmd, stylelintCmd],
  '**/*.{md,json}': [prettierCmd],
};
