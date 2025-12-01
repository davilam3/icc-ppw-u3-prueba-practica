import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonService } from '../../services/pokemonService';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-detail-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailPage {
  constructor(
    public pokemonService: PokemonService,   
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.fetchDetailById(id);
    }
  }

  back() {
    this.router.navigate(['/home']);
  }
}
