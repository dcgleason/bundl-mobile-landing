// import glob from 'fast-glob'

// async function loadEntries(directory, metaName) {
//   return (
//     await Promise.all(
//       (await glob('**/page.mdx', { cwd: `./src/app/business/${directory}` })).map(
//         async (filename) => {
//           let metadata = (await import(`../../app/business/${directory}/${filename}`))[metaName];
//           return {
//             ...metadata,
//             href: `/business/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
//           };
//         },
//       ),
//     )
//   ).sort((a, b) => b.date.localeCompare(a.date));
// }

// export function loadArticles() {
//   return loadEntries('blog', 'article');
// }

// export function loadCaseStudies() {
//   return loadEntries('work', 'caseStudy');
// }
