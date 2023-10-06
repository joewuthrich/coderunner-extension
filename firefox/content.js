var editors = document.getElementsByClassName("ace_editor");
for (var i = 0; i < editors.length; i++) {
  ace.require("ace/ext/language_tools");
  var editor = editors[i]?.env?.editor;
  editor?.setTheme("ace/theme/tomorrow");
  editor?.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    copyWithEmptySelection: true,
  });
}
