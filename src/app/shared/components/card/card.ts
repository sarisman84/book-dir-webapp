import { Component, Input } from '@angular/core';

export type CardVariant = 'standard' | 'quote';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent {
  @Input() title?: string;
  @Input() variant: CardVariant = 'standard';
}
