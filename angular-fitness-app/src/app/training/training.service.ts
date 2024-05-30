import { Exercise } from './exercise.model';

export class TrainingService {
  private exercises: Exercise[] = [
    {
      id: 'walking',
      name: 'Morning walk',
      duration: 30,
      calories: 300,
      date: new Date(),
      status: 'finished',
    },
    {
      id: 'running',
      name: 'evening run',
      duration: 45,
      calories: 450,
      date: new Date(),
      status: 'canceled',
    },
    {
      id: 'swimming',
      name: 'noon swimming',
      duration: 60,
      calories: 900,
      date: new Date(),
      status: 'finished',
    },
    {
      id: 'squating',
      name: 'noon squating',
      duration: 60,
      calories: 900,
      date: new Date(),
      status: 'finished',
    },
    {
      id: 'swimming',
      name: 'noon swimming',
      duration: 60,
      calories: 900,
      date: new Date(),
      status: 'finished',
    },
    {
      id: 'running',
      name: 'noon canceled',
      duration: 60,
      calories: 900,
      date: new Date(),
      status: 'finished',
    },
    {
      id: 'swimming',
      name: 'noon swimming',
      duration: 60,
      calories: 900,
      date: new Date(),
      status: 'canceled',
    },
  ];

  getExercises() {
    return this.exercises;
  }
}
