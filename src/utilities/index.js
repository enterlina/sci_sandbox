function substrName(name, num) {
  if (name.length <= num) {
    return name;
  }
  return name.substr(0, num).trim() + "...";
}

export {substrName};