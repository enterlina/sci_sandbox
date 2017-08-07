function substrName(name, num) {
  if (name.length <= num) {
    return name;
  }
  return name.substr(0, num).trim() + "...";
}
function getHighlightedText(text, higlight) {
    let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    return <span> { parts.map((part, i) => 
        <span key={i} className={part.toLowerCase() === higlight.toLowerCase() ? 'term' : {} }>
            { part }
        </span>)
    } </span>;
}

export {substrName, getHighlightedText};