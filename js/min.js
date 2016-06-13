var md_init = function(){
  var renderer = new marked.Renderer();
  renderer.listitem = function(text) {
    if (/^\s*\[[x ]\]\s*/.test(text)) { 
      text = text.replace(/^\s*\[ \]\s*/, '<input type="checkbox" class="task-list-item-checkbox" disabled> ').replace(/^\s*\[x\]\s*/, '<input type="checkbox" class="task-list-item-checkbox" checked disabled> ');
      return '<li style="list-style: none;margin-left: -20px;">' + text + '</li>'; 
    } else {
      return '<li>' + text + '</li>'; 
    } 
  };
  marked.setOptions({ 
    renderer: renderer, 
    gfm: true, 
    tables: true, 
    breaks: true, 
    pedantic: false, 
    sanitize: true, 
    smartLists: true, 
    smartypants: false 
  });
  var mdInfo = document.querySelectorAll("pre.markdown");
  mdInfo.forEach(function(i) {
    var text = this.textContent();
    text = marked(text);
    var $item = $("<div class='markdown'></div>").html(text);
    $(this).replaceWith($item) });
  $('pre code').each(function(i, block) { hljs.highlightBlock(block); });
}


