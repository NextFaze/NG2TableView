# NG2TableView [![npm version](https://badge.fury.io/js/NG2TableView.svg)](https://www.npmjs.com/package/NG2TableView)
NG2TableView for Angular2 apps.

Table component with sorting, filtering, paging, custom cell template, nested values bind ... for Angular2. inspired by [ng2-table](https://github.com/valor-software/ng2-table)


# Usage & Demo

[http://dennis-b.github.io/NG2TableView/](http://dennis-b.github.io/NG2TableView/)

- - -

## Getting Started
Make sure you have [Nodejs](https://nodejs.org/)


Best way to install ***NG2TableView*** is through [npm](https://www.npmjs.com/package/NG2TableView)

  ```bash
  npm i NG2TableView --save
  ```
  Or, you can [download it in a ZIP file](https://github.com/dennis-b/NG2TableView/archive/master.zip).


## Usage
 ```bash
  import {Component} from '@angular/core';
  import {PageTableColumns} from "./cols/columns";
  import {NG_TABLE_VIEW_DIRECTIVES, TableView} from "../../../ng2-table-view";
  import {ActivatedRoute} from "@angular/router";
  
  @Component({
      selector: "demo-page",
      directives: [NG_TABLE_VIEW_DIRECTIVES],
      providers: [],
      pipes: [],
      template: require('./page.html')
  })
  export class Page extends TableView {
  
      constructor(private activatedRoute:ActivatedRoute) {
          super(activatedRoute.snapshot.params["users"]);
      }
  
      ngOnInit() {
          this.getBuilder()
              .addCols(PageTableColumns)
              .setPaging(true)
              .setItemsPerPage(5)
              .setSelectable(true);
  
          this.buildTable();
      }
  }
  ```

## columns.ts
```bash
export const PageTableColumns:Array<ColumnIfc> = new TableColumns()
    .addCol(new TableColumn()
        .setTitle("index")
        .setName("index")
        .setSort(true)
    )
    .addCol(new TableColumn()
        .setTitle("Editable name ")
        .setName("name")
        .setTemplate(require("./custom-template.html"))
        .setSort(true)
    )

    ...
```

## page.html (template)

```bash
<div class="page">
    <md-content layout-padding>
        <div layout-gt-sm="row">
            <md-input placeholder="filter by index"
                      class="col"
                      [column]="'index'"
                      [ng2TableViewFilter]="tableBuilder.filtering"
                      (tableChanged)="onChangeTable($event)">
            </md-input>
        </div>

        <ng2TableView [config]="tableBuilder"
                      (tableChanged)="onChangeTable($event)"
                      [rows]="tableBuilder.rows"
                      [columns]="tableBuilder.columns">
        </ng2TableView>

        <div class="text-center">
            <ngTableViewPaging [config]="tableBuilder"
                               [dataLength]="tableBuilder.length"
                               (pageChanged)="onChangeTable($event)">
            </ngTableViewPaging>
        </div>
    </md-content>
</div>
```

...

