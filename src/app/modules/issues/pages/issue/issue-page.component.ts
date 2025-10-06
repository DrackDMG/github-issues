import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';
import { IssueService } from '../../services/issue.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-issue-page',
  imports: [CommonModule, RouterLink, IssueCommentComponent],
  templateUrl: './issue-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuePageComponent {
   route = inject(ActivatedRoute);
  issueService = inject(IssueService);

  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap((number) => this.issueService.setIssueNumber(number))
    )
  );

  issueQuery = this.issueService.issueQuery;
  issueCommentsQuery = this.issueService.issueCommentsQuery;
}
