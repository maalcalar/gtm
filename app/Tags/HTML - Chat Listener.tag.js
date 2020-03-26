import Tag from "../../core/tags/tag_classes";

const tag = new Tag('custom html');

tag.html = '<script>';
tag.html += '    document.querySelector("body").addEventListener("click", function (event) {';
tag.html += '		if (event.target.classList.contains("atm-chat-button")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat button"';
tag.html += '        })';
tag.html += '    };';
tag.html += '        if (event.target.classList.contains("atm-chat-min")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Min"';
tag.html += '        })';
tag.html += '    };';
tag.html += '	    if (event.target.classList.contains("atm-chat-close")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Close"';
tag.html += '        })';
tag.html += '    };';
tag.html += '         if (event.target.classList.contains("atm-chat-option-mimovistar")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Option Mi Movistar"';
tag.html += '        })';
tag.html += '    };';
tag.html += '         if (event.target.classList.contains("atm-chat-option-play")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Option Play"';
tag.html += '        })';
tag.html += '    };';
tag.html += '         if (event.target.classList.contains("atm-chat-tooltip-documento")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Tooltip Documento"';
tag.html += '        })';
tag.html += '    };';
tag.html += '         if (event.target.classList.contains("atm-chat-tooltip-numeroservicio")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Tooltip NumeroServicio"';
tag.html += '        })';
tag.html += '    };';
tag.html += '         if (event.target.classList.contains("atm-chat-datos-siguiente")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Datos Siguiente"';
tag.html += '        })';
tag.html += '    };';
tag.html += '         if (event.target.classList.contains("atm-chat-motivos-recuperarcontrasena")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Motivos Recuperar Contraseña"';
tag.html += '        })';
tag.html += '    };';
tag.html += '         if (event.target.classList.contains("atm-chat-motivos-option")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Motivos Option"';
tag.html += '        })';
tag.html += '    };';
tag.html += '         if (event.target.classList.contains("atm-chat-motivos-siguiente")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Motivos Siguiente"';
tag.html += '        })';
tag.html += '    };';
tag.html += '          if (event.target.classList.contains("atm-chat-motivos-siguiente")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Motivos Siguiente"';
tag.html += '        })';
tag.html += '    };';
tag.html += '          if (event.target.classList.contains("atm-chat-close-si")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Close Si"';
tag.html += '        })';
tag.html += '    };';
tag.html += '          if (event.target.classList.contains("atm-chat-close-no")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Close No"';
tag.html += '        })';
tag.html += '    };';
tag.html += '          if (event.target.classList.contains("atm-chat-close-enviar")) {';
tag.html += '        dataLayer.push({';
tag.html += '            "event": "atm.eventchat",';
tag.html += '            "eventCategory": "Chat",';
tag.html += '            "eventAction": "Clic",';
tag.html += '            "eventLabel": "Chat Close Enviar"';
tag.html += '        })';
tag.html += '    };';
tag.html += '});';
tag.html += '</script>';

export default tag;