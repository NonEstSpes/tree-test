import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TreeNode} from '../components/tree/type';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  public nodes$: Observable<TreeNode[]> = new Observable<TreeNode[]>();

  constructor(
    private http: HttpClient,
  ) { }

  public getNodes(): void {
    this.nodes$ = this.http.get<TreeNode[]>('http://localhost:3000/nodes');
  }
}
