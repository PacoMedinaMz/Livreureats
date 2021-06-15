export var items: any = [];

export function addItem(item: any) {
  items.push(item);
}

export function removeItem(id: any) {
  items = items.filter((item: any) => item.id !== id);
}

export default { addItem, removeItem };
