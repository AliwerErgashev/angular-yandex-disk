import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DiskService } from '../../services/disk.service';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../../models/resource';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  public items: Array<Resource>;
  private url = '/';

  constructor(
    private disk: DiskService,
    private resource: ResourceService
  ) { }

  ngOnInit() {
    this.getFolder();
  }

  async getFolder() {
    const result: any = await this.resource.getFolders({ path: this.url });
    const { _embedded: { items } } = result;
    this.items = items;
  }

  async changeUrl(item: Resource) {
    const { path, name, type } = item;
    if (type === 'dir') {
      this.url = path;
      this.getFolder();
    }
  }

  toRootFolder() {
    this.url = '/';
    this.getFolder();
  }


}
