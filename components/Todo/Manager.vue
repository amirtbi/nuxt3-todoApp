<script>
// Constants
export default {
  setup(props, { slots }) {
    const model = 1;

    const todoCreationError = ref(false);
    const loading = ref(false);
    const todoList = ref([]);
    const filteredToDoLists = ref([]);
    // Computed

    const doneCount = computed(() => {
      return todoList.value.filter((item) => item.done).length;
    });
    const totalCount = computed(() => {
      return todoList.value.length;
    });

    const computedTodoList = computed(() => {
      if (filteredToDoLists.value.length > 0) {
        return filteredToDoLists.value;
      } else {
        return todoList.value;
      }
    });

    // Functions

    function filterToDoList(chosenFilter = null) {
      if (chosenFilter) {
        console.log("chosen filter", chosenFilter);
        filteredToDoLists.value = todoList.value.filter(
          (item) => item.done === chosenFilter
        );
        console.log("found filtrs", filteredToDoLists.value);
      } else {
        filteredToDoLists.value = todoList.value;
      }
    }
    function addToDo(values) {
      const todoInfo = {
        title: values.title,
        description: values.description,
        done: values.done,
      };
      todoList.value.push(todoInfo);
      console.log("todoInfo", todoList);
    }

    // Returns

    return () =>
      slots.default({
        todoList: computedTodoList.value,
        Add: addToDo,
        filterToDo: filterToDoList,
      });
  },
};
</script>
