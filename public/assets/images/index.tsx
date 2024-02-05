
const getImage = (imageName: string): string => {
    return require(`public/assets/images/${imageName}`);
};

export const headerLogo: string = getImage('travelo-logo-header.png');
export const footerLogo: string = getImage('travelo-logo-footer.png');

