import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TreeComponent} from './components/tree/tree.component';
import {NodeService} from './services/node.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TreeComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(
    public nodeService: NodeService,
  ) { }

  ngOnInit() {
    this.nodeService.getNodes()
  }
}
