export type TaskListType = {
    id: number;
    date: string | Date | null;
    title: string;
    description: string;
    is_finish: boolean;
    is_title_fix: boolean;
}