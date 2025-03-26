import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {TreeNode} from './type';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent {
  nodes: InputSignal<TreeNode[]> = input([] as TreeNode[]);

  toggleNode(node: TreeNode): void {
    node['isExpanded'] = !node['isExpanded'];
  }

  trackByFn(index: number, item: TreeNode): number {
    return item.id;
  }
}
