
// обрезать строку и добавить 3 точки в конце
function substrName(name, num) {
  if (name.length <= num) {
    return name;
  }
  return name.substr(0, num).trim() + "...";
}

// выделить цветом текст
function getHighlightedText(text, higlight) {
    let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    return <span> { parts.map((part, i) => 
        <span key={i} className={part.toLowerCase() === higlight.toLowerCase() ? 'term' : {} }>
            { part }
        </span>)
    } </span>;
}

// Убрать посторонние символы из запроса
function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

export {substrName, getHighlightedText, escapeHtml};