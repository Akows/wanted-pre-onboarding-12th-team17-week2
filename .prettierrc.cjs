module.exports = {
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  semi: true,
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
  tabWidth: 2,
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.env',
      options: {
        parser: 'dotenv',
      },
    },
  ],
};
