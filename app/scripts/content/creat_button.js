module.exports = () => {
  if(document.querySelectorAll('#github-save-as-md').length === 0){
    var anch = document.createElement("a");
    anch.id = 'github-save-as-md';
    anch.download="weekly.txt";
    anch.innerHTML = 'Save As Markdown';
    document.body.appendChild(anch);
    anch = document.getElementById("github-save-as-md");
  }
};
