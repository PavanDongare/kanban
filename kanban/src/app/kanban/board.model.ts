export interface Board {
  id?: string;
  title? : string;
  priority?: string;
  tasks?: Task[];
}

export interface Task {
  description?: string,
  label?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'grey';
}

