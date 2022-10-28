<script lang="ts">
// Constants
export default {
  setup(props, { slots }) {
    interface ITodList {
      title: string;
      description: string;
      done: string;
    }
    const todoCreationError = ref(false);
    const loading = ref(false);
    const todoList = ref([]);

    const filteredToDoLists = ref<ITodList[]>([]);

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

    function filterToDoList(chosenFilter: string | null = null): void {
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
    function addToDo<T extends ITodList>(values: T) {
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
