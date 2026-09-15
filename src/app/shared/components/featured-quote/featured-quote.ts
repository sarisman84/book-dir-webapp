import { Component, Input } from '@angular/core';
import { Quote } from '../../../core/services/quote.service';

@Component({
  selector: 'app-featured-quote',
  standalone: true,
  templateUrl: './featured-quote.html',
  styleUrl: './featured-quote.scss',
})
export class FeaturedQuoteComponent {
  @Input({ required: true }) quote!: Quote;
  @Input() pageNumber?: number;
}
