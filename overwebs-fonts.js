const fontSrc = font => {
  return `url("${(window.modulesAssetPath && window.modulesAssetPath('overwebs-fonts')) || ''}/fonts/${font}")`;
};

const styleText = document.createTextNode(`
@font-face {
  font-family: overwebs-big-noodle;
  src: ${fontSrc('BigNoodleTooOblique.ttf')};
}
@font-face {
  font-family: overwebs-futura;
  src: ${fontSrc('Futura.ttf')};
}
@font-face {
  font-family: overwebs-helvetica;
  src: ${fontSrc('Helvetica.ttf')};
}`);

const style = document.createElement('style');
style.appendChild(styleText);
document.head.appendChild(style);
