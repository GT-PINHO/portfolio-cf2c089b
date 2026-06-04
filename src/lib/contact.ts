export const WHATSAPP_NUMBER = "5519997501584";
export const WHATSAPP_DISPLAY = "(19) 99750-1584";

export const WHATSAPP_MESSAGE =
  "Olá, David! Encontrei seu portfólio profissional e fiquei impressionado(a) com seu perfil em gestão de tráfego pago, Meta Ads e construção de sistemas com IA. Gostaria de conversar sobre uma oportunidade (freelance, CLT ou PJ). Quando você teria disponibilidade para uma conversa rápida?";

export const whatsappUrl = (text = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
