import $ from 'jquery';

function plainTextHandler($dom) {
  let a = $($dom).find('a');
  return `[${$dom.innerHTML}](${$dom.href})`
}
let textFile = null;
let makeTextFile = (text) => {
  var data = new Blob([text], {type: 'text/plain'});
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }
  textFile = window.URL.createObjectURL(data);
  return textFile;
};

module.exports = () => {
  let textFile = null,
    $comments = $('.markdown-body.js-comment-body'),
    plainText = '';
    [].map.call($comments,paragragh=>{
      let $h4 = $(paragragh).find('h4'),
          $p = $(paragragh).find('p');
      for(let i = 0;i<$h4.length;i++){
          plainText += "#### "
          plainText += plainTextHandler($($h4[i]).find("a")[0]);;
          plainText += '\n';
          plainText += $p[i].innerHTML;
          plainText += '\n\n';
      }
    })
    let anch = document.getElementById("github-save-as-md");
    anch.href = makeTextFile(plainText);

};
