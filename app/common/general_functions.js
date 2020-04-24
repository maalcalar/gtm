exports.registerEvent = (category, action, label = ' ', interaction = true) => {
    const dataLayer = window.dataLayer || [];
  
    dataLayer.push({
      event: 'atm.event',
      eventCategory: category.toLowerCase(),
      eventAction: action.toLowerCase(),
      eventLabel: label.toLowerCase(),
      nonInteraction: interaction
    });
  }
  
  exports.loadScript = (url, callback) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url + '?nc=' + new Date().getTime();
    script.onload = callback;
    document.head.appendChild(script);
  }
  
  exports.setCookie = (cname, cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  exports.getCookie = (cname) => {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  exports.getDeviceCategory = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|SymbianOS|Windows Phone/i.test(window.navigator.userAgent) ? "Mobile" : "Desktop";
  }
  
  // exports.getCookie = (e) => {
  //   for(var t="".concat(e,"="),n=document.cookie.split(";"),o=0;o<n.length;o+=1){for(var i=n[o];" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(t))return i.substring(t.length,i.length)}
  //   return null;
  // }
  
  // exports.setCookie = (e,t,n,o) => {
  //   if(n)if("number"==typeof n||n.match(/^\d+$/)){var i=new Date;i.setTime(i.getTime()+24*parseInt(n)*60*60*1e3),n="; expires="+i.toGMTString()}else n="; expires="+n;else n="";document.cookie=escape(e)+"="+escape(t)+n+"; domain="+o+"; path=/"
  // }
  
  exports.loadCss = (e,t) => {
    var n=e,o=!1;if(document.querySelectorAll("head link[type='text/css']").forEach((function(e){RegExp(n).test(e.href)&&(o=!0)})),o)t();else{var i=document.getElementsByTagName("head")[0],r=document.createElement("link");r.type="text/css",r.href=n+"?_nc="+(new Date).getTime(),r.rel="stylesheet",r.media="all",r.onload=t,i.appendChild(r)}
  }
  
  // exports.registerAction = (e,t,n,o) => {
  //   (window.dataLayer||[]).push({event:"atm.event",eventCategory:e,eventAction:t,eventLabel:n,nonInteraction:o||0})
  // }
  
  exports.getWidWindows = () => {
    const windowWidth = window.innerWidth;
    return windowWidth;
  };
  
  
  exports.createElement = (elemento, clase, id) => {
    const element = document.createElement(elemento);
    if (id) {
      element.setAttribute('id', id);
    }
    if (clase) {
      if (typeof (clase) === 'string') {
        element.classList.add(clase);
      }
      if (typeof (clase) === 'object') {
        clase.forEach((clss) => {
          element.classList.add(clss);
        });
      }
    }
    return element;
  };
  
  const estadoTest = () => {
    const urlTag = /test=true/.test(window.location.href);
    if (urlTag) {
      console.log('estado Test de Attach');
    }
    return urlTag;
  };
  
  
  exports.etiquetadoFunction = (categroria, evento, texto = ' ', interaccion = 0, idElemento = 0) => {
    const dataLayer = window.dataLayer || [];
    const arrayData = {
      event: 'atm.event',
      eventCategory: categroria.toLowerCase(),
      eventAction: evento.toLowerCase(),
      eventLabel: texto.toLowerCase(),
      nonInteraction: interaccion
    };
    if (idElemento) {
      arrayData.dimension55 = idElemento;
    }
    dataLayer.push(arrayData);
    if (estadoTest()) {
      console.log(arrayData);
    }
  };
  
  exports.tiquetadoFunction2 = (categroria, evento, texto = ' ', interaccion = 0) => {
    const dataLayer = window.dataLayer || [];
    const arrayData = {
      event: 'atm.event',
      eventCategory: categroria.toLowerCase(),
      eventAction: evento.toLowerCase(),
      eventLabel: texto,
      nonInteraction: interaccion
    };
    dataLayer.push(arrayData);
    if (estadoTest()) {
      console.log(arrayData);
    }
  };
  
  const isAndroid = () => {
    let retorno = false;
    if (navigator.platform !== 'iPad' && navigator.platform !== 'iPhone' && navigator.platform !== 'iPod') {
      retorno = true;
    }
    return retorno;
  };
  
  exports.clickElemento = (elemento, funcion, parameter, prev = 0) => {
    const elemnt = elemento;
    const func = funcion;
    const prevent = prev;
  
    const callback = () => {
      if (parameter) {
        func(parameter);
      } else {
        func();
      }
    };
  
    if (isAndroid()) {
      elemnt.onclick = (e) => {
        if (prevent) {
          e.preventDefault();
        }
        callback();
      };
    } else {
      elemnt.ontouchstart = () => {
        callback();
      };
    }
  };
  
  exports.clickElementoListener = (elemento, funcion, parameter, prev = 0) => {
    const elemnt = elemento;
    const func = funcion;
    const prevent = prev;
  
    const callback = () => {
      if (parameter) {
        func(parameter);
      } else {
        func();
      }
    };
  
    if (isAndroid()) {
      elemnt.addEventListener('click', (e) => {
        if (prevent) {
          e.preventDefault();
        }
        callback();
      });
    } else {
      elemnt.ontouchstart = () => {
        callback();
      };
    }
  };
  
  
  exports.formatearString = (texto) => {
    let textoFormateado = texto;
    textoFormateado = textoFormateado.replace(/(\r\n|\n|\r)/gm, ' ');
    textoFormateado = textoFormateado.replace(/\s+/g, ' ');
    textoFormateado = textoFormateado.trim();
    textoFormateado = textoFormateado.toLowerCase();
    return textoFormateado;
  };