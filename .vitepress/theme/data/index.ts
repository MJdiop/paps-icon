
const icons = [];

const categorySet = new Set();

//  @ts-ignore
const svgModules = import.meta.glob('/icons/**/*.svg');

for (const path in svgModules) {

  //  @ts-ignore
  const iconName = path.split('/').pop().replace('.svg', '');
  const category = path.split('/')[2];

  //  @ts-ignore
  categorySet.add(category);

  //  @ts-ignore
  icons.push({ name: iconName, path, category });
}


export default icons;
export { categorySet };
