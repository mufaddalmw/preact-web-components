import "./styles.css";

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./elements/', true, /\.(js|jsx)$/));