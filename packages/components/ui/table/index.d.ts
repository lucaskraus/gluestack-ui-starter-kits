import React from 'react';
import { Text, View } from 'react-native';
type ITableHeadProps = React.ComponentProps<typeof View | typeof Text> & {
    useRNView?: boolean;
};
type ITableDataProps = React.ComponentProps<typeof View | typeof Text> & {
    useRNView?: boolean;
};
declare const Table: React.ForwardRefExoticComponent<any>;
declare const TableHeader: React.ForwardRefExoticComponent<any>;
declare const TableBody: React.ForwardRefExoticComponent<any>;
declare const TableFooter: React.ForwardRefExoticComponent<any>;
declare const TableHead: React.ForwardRefExoticComponent<ITableHeadProps & React.RefAttributes<View | Text>>;
declare const TableRow: React.ForwardRefExoticComponent<any>;
declare const TableData: React.ForwardRefExoticComponent<ITableDataProps & React.RefAttributes<View | Text>>;
declare const TableCaption: React.ForwardRefExoticComponent<any>;
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableData, TableCaption, };
