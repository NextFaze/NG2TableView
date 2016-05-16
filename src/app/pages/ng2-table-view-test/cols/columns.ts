import {ColumnIfc} from "../../../../lib/ng2-table-view/table/config/ColumnIfc";
import {TableColumns} from "../../../../lib/ng2-table-view/table/config/TableColumns";
import {TableColumn} from "../../../../lib/ng2-table-view/table/config/TableColumn";


export const PageTableColumns:Array<ColumnIfc> = new TableColumns()
    .addCol(new TableColumn()
        .setTitle("Select")
        .setTemplate(require("./custom-template.html"))
    )
    .addCol(new TableColumn()
        .setTitle("index")
        .setName("index")
        .setSort(true)
    )
    .addCol(new TableColumn()
        .setTitle("name")
        .setName("name")
        .setSort(true)
    )
    .addCol(new TableColumn()
        .setTitle("gender")
        .setName("gender")
    )
    .addCol(new TableColumn()
        .setTitle("company")
        .setName("company")
    )
    .addCol(new TableColumn()
        .setTitle("email")
        .setName("email")
    )
    .addCol(new TableColumn()
        .setTitle("latitude")
        .setName("location.latitude")
    )
    .addCol(new TableColumn()
        .setTitle("longitude")
        .setName("location.longitude")
    )
    .getCols();
