import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-labels-selector',
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsSelectorComponent {
  labels = input.required<GitHubLabel[]>();

  issuesService = inject(IssuesService);

  isSelected(label: string) {
    return this.issuesService.selectedLabels().has(label);
  }

  toggleLabel(label: string) {
    this.issuesService.toggleLabel(label);
  }
 }
