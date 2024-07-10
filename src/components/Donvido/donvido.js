import { ref } from 'vue';

export const selectedCount = ref('');
export const selectedColum = ref('');
export const selectedAction = ref('');

export const actions = [
  { id: 1, label: 'Hành động A', value: 'actionA' },
  { id: 2, label: 'Hành động B', value: 'actionB' },
  { id: 3, label: 'Hành động C', value: 'actionC' },
];

export const listTable = ref([
  {
    id: "CTN",
    name: "Product 1",
    describe: "carton",
    Creator: "user 1",
    CreationDate: "1/1/2024",
    Updater: "User 1",
    UpdateDate: "2/1/2024"
  },
  {
    id: "PAR",
    name: "Product 2",
    describe: "Part",
    Creator: "user 1",
    CreationDate: "1/1/2024",
    Updater: "User 1",
    UpdateDate: "2/1/2024"
  },
  {
    id: "PCS",
    name: "Product 3",
    describe: "cái",
    Creator: "user 1",
    CreationDate: "1/1/2024",
    Updater: "User 1",
    UpdateDate: "2/1/2024"
  },
  {
    id: "BOX",
    name: "Product 4",
    describe: "box",
    Creator: "user 1",
    CreationDate: "1/1/2024",
    Updater: "User 1",
    UpdateDate: "2/1/2024"
  },
]);
// export function selectAll(event) {
//   if (event.target.checked) {
//     selectedItems.value = listTable.value.map(x => x.id);
//     selectedCount.value = listTable.value.length;
//   } else {
//     selectedItems.value = [];
//     selectedCount.value = 0;
//   }
// }

// export function selectItem(event, id) {
//   if (event.target.checked) {
//     selectedItems.value.push(id);
//     selectedCount.value++;
//   } else {
//     selectedItems.value = selectedItems.value.filter(x => x!== id);
//     selectedCount.value--;
//   }
// }
