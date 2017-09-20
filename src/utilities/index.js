
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
  return "";
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
export function convertDateAndTime(date) {
        date = new Date(date);
        var dd = date.getDate();
        if (dd < 10) 
            dd = '0' + dd;
        
        var mm = date.getMonth() + 1;
        if (mm < 10) 
            mm = '0' + mm;
        
        var yyyy = date.getFullYear()

        var hh = date.getUTCHours();
        if (hh < 10) 
            hh = '0' + hh;

        var min = date.getMinutes();
        if (min < 10) 
            min = '0' + min;

        return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min;
}
export function multipleArrTransformer(arr) {
  if(!arr) { return false} 
  return arr.map((item) => {
    let title = item[0] ? item[0].toLowerCase().trim() : false;
    let value = item[1] ? item[1].trim() : false;
    let prefix = '';
    if(!title || !value) {
      return false;
    }
    if(title == 'email' || title == 'e-mail') {
      prefix = 'mailto:';
    } else if (title == 'phone' || title == 'tel') {
      prefix = 'tel:';
    }

    return <li><a href={prefix + value}>{title}</a></li>;
  })
}
