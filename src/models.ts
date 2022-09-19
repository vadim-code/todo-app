export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface UpdateDTO {
  newText: string;
  id: number;
}

export interface CheckDTO {
  isChecked: boolean;
  id: number;
}
