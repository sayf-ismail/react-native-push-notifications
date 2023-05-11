type Props = {
  navigation: any;
  GlobalState: {
    toDoList: toDoList[];
    setToDoList: React.Dispatch<React.SetStateAction<toDoList[]>>;
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    chosenTask: string;
    setChosenTask: React.Dispatch<React.SetStateAction<string>>;
  }
}

type toDoList = {
  id: number;
  task: string;
}