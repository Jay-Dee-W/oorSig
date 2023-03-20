import { readdir, writeFile } from 'fs/promises';

const generateImportStatement = (operationName: string, artifact: string) => {
  return `import { ${operationName}$data } from './${artifact.replace(
    '.ts',
    ''
  )}';`;
};

(async () => {
  const cwd = process.cwd();

  const artifacts = await readdir(`${cwd}/src/relay/__generated__`);

  const imports: Array<string> = [];
  const fragmentTypes: Record<string, any> = {};
  const queryTypes: Record<string, any> = {};
  const mutationNames: Array<string> = [];

  for (const artifact of artifacts) {
    if (!artifact.endsWith('.graphql.ts')) continue;

    const operationName = artifact.replace('.graphql.ts', '');
    if (artifact.includes('Query')) {
      imports.push(generateImportStatement(operationName, artifact));
      queryTypes[operationName] = `${operationName}$data`;
    } else if (artifact.includes('Mutation')) {
      mutationNames.push(operationName);
    } else {
      imports.push(generateImportStatement(operationName, artifact));
      fragmentTypes[operationName] = `${operationName}$data`;
    }
  }

  await writeFile(
    'src/relay/__generated__/__operationTypes.ts',
    `${imports.join('\n')}
export type FragmentTypes = {${Object.entries(fragmentTypes)
      .map(([name, type]) => `${name}: ${type};`)
      .join('')}};
export type QueryTypes = {${Object.entries(queryTypes)
      .map(([name, type]) => `${name}: ${type};`)
      .join('')}};
${
  mutationNames.length
    ? `export type MutationName = '${mutationNames.join("' | '")}';`
    : ''
}
`
  );
})();
