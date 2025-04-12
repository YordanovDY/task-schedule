export type Category = 'Planning' | 'Implementation' | 'Problem Solving' | 'Testing' | 'Deployment' | 'Documentation'
    | 'Learning' | 'Meeting' | 'Other';

export type Status = 'Pending' | 'In Progress' | 'Completed'

export type Priority = 'Low' | 'Medium' | 'High' | 'Critical';

export interface Task {
    date: Date;
    category: Category;
    status: Status;
    priority: Priority;
    description: string;
}