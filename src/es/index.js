import "../scss/styles.scss";

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('../elements/', true, /\.(js|jsx)$/));