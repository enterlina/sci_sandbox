
// обрезать строку и добавить 3 точки в конце
export function substrName(name, num) {
  if (name.length <= num) {
    return name;
  }
  return name.substr(0, num).trim() + "...";
}

// выделить цветом текст
export function getHighlightedText(text, higlight) {
    let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    return <span> { parts.map((part, i) => 
        <span key={i} className={part.toLowerCase() === higlight.toLowerCase() ? 'term' : {} }>
            { part }
        </span>)
    } </span>;
}

// Убрать посторонние символы из запроса
export function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

export function langArrayHandler(data, lang) {
  if(data === undefined || data.length === 0 ) {
    return false;
  }
 let result = data.find((element)=>{
    if (element !== undefined ) { return element[lang] }
    return false;
  });
  if(result) {
    return result[lang];
  }
  return "Translation not found";
}
export function convertDate(date) {
        date = new Date(date);
        var dd = date.getDate();
        if (dd < 10) 
            dd = '0' + dd;
        
        var mm = date.getMonth() + 1;
        if (mm < 10) 
            mm = '0' + mm;
        
        var yyyy = date.getFullYear()

        return dd + '.' + mm + '.' + yyyy;
}
export function cardMapData(type) {
  let researchMap = {
    video: 'VIDEO',
    _author: 'AUTHOR',
    goal: 'GOAL',
    problem: 'PROBLEM',
    solution: 'SOLUTION',
    methods: 'METHODS',
    recommendation: 'RECOMENDATIONS',
    use: 'USE',
    tags: 'TAGS',
    download: 'DOWNLOAD'
  }
  if(type=="Research") {
    return researchMap;
  }
}