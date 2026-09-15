import { Component, Input } from '@angular/core';

export type CardVariant = 'standard' | 'quote';
export type BookStatus = 'Available' | 'Reserved' | 'Archived';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent {
  @Input() title?: string;
  @Input() author?: string;
  @Input() coverImageUrl?: string;
  @Input() status?: BookStatus;
  @Input() variant: CardVariant = 'standard';
}
