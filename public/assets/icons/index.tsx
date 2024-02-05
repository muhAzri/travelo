const getImage = (imageName: string): string => {
    return require(`public/assets/icons/${imageName}`);
};
export const searchIcon = getImage("search-icon.svg");