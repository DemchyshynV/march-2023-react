export interface IPagination<DATA> {
    total_items: number
    total_pages: number
    prev: string;
    next: string;
    items: DATA[]
}