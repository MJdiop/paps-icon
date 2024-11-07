function formatIconName(name) {
  return name
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Mettre en majuscule chaque mot
    .join('');
}

const icons = [];

const categorySet = new Set();

//  @ts-ignore
const svgModules = import.meta.glob('/icons/**/*.svg');

for (const path in svgModules) {

  //  @ts-ignore
  const iconName = path.split('/').pop().replace('.svg', '');
  const iconNameFormated = formatIconName(iconName);
  const category = path.split('/')[2];

  //  @ts-ignore
  categorySet.add(category);

  //  @ts-ignore
  icons.push({ name: iconNameFormated, path, category });
}


export default icons;
export { categorySet };
