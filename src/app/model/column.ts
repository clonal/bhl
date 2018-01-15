export class Column {
  id: number;
  parent: number;
  name: string;
  desc: string;
  banner: string;
  order: number;


  constructor(id: number, parent: number, name: string, desc: string, banner: string, order: number) {
    this.id = id;
    this.parent = parent;
    this.name = name;
    this.desc = desc;
    this.banner = banner;
    this.order = order;
  }
}
