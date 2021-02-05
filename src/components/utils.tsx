export const objectToCssStyle = (object:object|undefined) => (JSON.stringify(object).replace(/"/g,'').replace(/((:{))/g,'{').replace(/,/g,';').slice(1,-1))
