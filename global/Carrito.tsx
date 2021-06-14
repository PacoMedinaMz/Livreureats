export var items: any = [];

export function addItem(item: any) {
  items[item.id + ""] = item;
}

export function removeItem(id: any) {
  delete items[id + ""];
}

export default { addItem, removeItem };
