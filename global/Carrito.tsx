export var items: any = [];

export function addItem(item: any) {
  items[item.id + ""] = item;
}

export function removeItem(id: any) {
  delete items[id + ""];

  let limpiar = true;
  items.map((item: any) => {
    if (item !== undefined) {
      limpiar = false;
    }
  });
  if (limpiar) {
    items = [];
  }
}

export default { addItem, removeItem };
