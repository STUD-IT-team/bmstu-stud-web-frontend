export const Validators = {
  name: {
    regExp: /^(([а-я]+-)*[a-я]+) +(([а-я]+-)*[a-я]+)( +(([а-я]+-)*[a-я]+))?$/i,
    prettifyResult: (str) => str.replaceAll(/ {2,}/g, ' '),
  },
  group: {
    regExp: /(^(иу|ибм|мт|см|бмт|рл|э|рк|фн|л|сгн|вуц|гуимц|уц|фмоп|фоф|исот|ркт|ак|пс|рт|лт|оэ|оэп)\d\d?и?-1\d[АМБамб]?$)|(^юр-1\d$)/i,
    prettifyResult: (str) => str.toUpperCase(),
  },
  tg: {
    regExp: /^((https:\/\/)?(t\.me\/)|@)?\w{5,}$/i,
    prettifyResult:  (str) => str.replace(/https:\/\//i, '').replace(/t\.me\//i, '').replace('@', ''),
  },
  vk: {
    regExp: /^(https:\/\/)?(vk\.com\/|@)?(\w+\.)*\w+$/i,
    prettifyResult: (str) => str.replace(/https:\/\//i, '').replace(/vk\.com\//i, '').replace('@', ''),
  },
  email: {
    regExp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    prettifyResult: (str) => str.toLowerCase(),
  },
  phone: {
    regExp: /^((\+7)|8)[-\s.]?((\(\d\d\d\))|(\d\d\d))[-\s.]?\d\d\d[-\s.]?\d\d[-\s.]?\d\d$/,
    prettifyResult: (str) => str.replace('+7', '8').replace('-', '').replace('(', '').replace(')', ''),
  },
  password: {
    regExp: /^.{6,}$/i,
  },
  id: {
    regExp: /^#?[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i,
    prettifyResult: (str) => str.replace('#', '').toLowerCase(),
  },
  login: {
    regExp: /^(\w|\d|'-'|'_'){4,16}$/i,
  }
}
Object.entries(Validators).forEach(([name, validator]) => {
  validator.validate = (str) => !validator.regExp || validator.regExp.test(str.trim());
});


export function getValidatedAndPrettified(field, str) {
  if (!field.validate || field.validate(str)) {
    return field.prettifyResult ? field.prettifyResult(str) : str;
  }
  return null;
}
