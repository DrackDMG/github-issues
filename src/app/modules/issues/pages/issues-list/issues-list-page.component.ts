import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { JsonPipe } from '@angular/common';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { IssueItemComponent } from "../../components/issue-item/issue-item.component";

@Component({
  selector: 'app-issues-list-page',
  imports: [LabelsSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuesListPageComponent {
  issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }

   get issuesQuery() {
    return this.issuesService.issuesQuery;
  }
}
