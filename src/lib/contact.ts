export const WHATSAPP_NUMBER = "5519997501584";
export const WHATSAPP_DISPLAY = "(19) 99750-1584";

export const WHATSAPP_MESSAGE =
  "Olá, David! Encontrei seu portfólio e gostaria de conversar sobre uma oportunidade remota (CLT ou PJ). Quando você teria disponibilidade?";

export const whatsappUrl = (text = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
