export interface SelectQuery {
    selection: string;
    mapToProperty?: string;
    aliasName?: string;
    virtual?: boolean;
    columnType?: string;
}