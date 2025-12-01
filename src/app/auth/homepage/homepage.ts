import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { PokemonService } from '../../pokemon/services/pokemonService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Homepage { 
  offset = signal(20); 
  limit = signal(20);

  constructor(public pokemonService: PokemonService, private router: Router) {
    effect(() => {
      const off = this.offset();
      const lim = this.limit();
      this.pokemonService.fetchList(off, lim);
    });
  }

  nextPage() {
    this.offset.set(this.offset() + this.limit());
  }

  prevPage() {
    const newOffset = Math.max(0, this.offset() - this.limit());
    this.offset.set(newOffset);
  }

  goToDetail(urlOrName: string) {
    const match = urlOrName.match(/\/pokemon\/(\d+)\//);
    const id = match ? match[1] : urlOrName;
    this.router.navigate(['/pokemon', id]);
  }
}
