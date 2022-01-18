let items = JSON.parse(localStorage.getItem('todos'))

export function getListItems() {
  return items
}

export function getListItem(id) {
  return items.find((item) => item.id === id)
}
