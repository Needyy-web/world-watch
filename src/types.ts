export interface ClockData {
    id: string;
    name: string;
    offset: number;
}

export interface ClockProps {
    id: string;
    name: string;
    offset: number;
    onRemove: (id: string) => void;
}

export interface NewClockData {
    name: string;
    offset: number;
}

export interface AddClockFormProps {
    onAdd: (data: NewClockData) => void;
}