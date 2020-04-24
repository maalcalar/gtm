import Tag from "../../core/tags/tag_classes";

const tag = new Tag('custom html');

tag.html = '<script>';
tag.html += '    if (/^\/descargaprix/.test(window.location.pathname)) {';
tag.html += '    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|SymbianOS|Windows Phone/i)) {';
tag.html += '      if (navigator.userAgent.match(/Android|webOS/i)) {';
tag.html += '        window.location = "https://play.google.com/store/apps/details?id=pe.beyond.movistar.prioritymoments";';
tag.html += '      } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {';
tag.html += '        window.location = "https://itunes.apple.com/gb/app/movistar-priority/id863503140?mt=8";';
tag.html += '      } else {';
tag.html += '        window.location = "http://www.movistar.com.pe/prix";';
tag.html += '  }';
tag.html += '    } else {';
tag.html += '        window.location = "http://www.movistar.com.pe/prix";';
tag.html += '  }';
tag.html += '}';
tag.html += '</script>';

export default tag;